// backend/fix-fechas4a9.js
// Uso:
//  node backend/fix-fechas4a9.js --dry-run   # ver qué va a hacer
//  node backend/fix-fechas4a9.js             # ejecutar realmente
//
// Requisitos:
//  npm i -w backend mysql2 dotenv
//
// Lee credenciales de .env (Railway):
//   DATABASE_URL=mysql://user:pass@host:port/db
//   o bien MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE

const fs = require("fs");
const path = require("path");
const mysql = require("mysql2/promise");
require("dotenv").config({ path: path.join(__dirname, ".env") });

const FECHAS = [4, 5, 6, 7, 8, 9];
const TABLE = "partidos";
const FIXTURE_PATH = path.join(__dirname, "partidos_actualizado_1a9.json");

const isDryRun = process.argv.includes("--dry-run");

function parseDatabaseUrl(url) {
  // mysql://user:pass@host:port/db
  const m = /^mysql:\/\/([^:]+):([^@]+)@([^:/]+):?(\d+)?\/(.+)$/.exec(url || "");
  if (!m) return null;
  return {
    host: m[3],
    user: m[1],
    password: m[2],
    port: m[4] ? Number(m[4]) : 3306,
    database: m[5],
  };
}

async function getConnection() {
  let cfg = null;

  if (process.env.DATABASE_URL && process.env.DATABASE_URL.startsWith("mysql://")) {
    cfg = parseDatabaseUrl(process.env.DATABASE_URL);
  } else if (process.env.MYSQL_HOST) {
    cfg = {
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      port: process.env.MYSQL_PORT ? Number(process.env.MYSQL_PORT) : 3306,
    };
  }

  if (!cfg) {
    throw new Error(
      "No se encontraron credenciales de MySQL. Define DATABASE_URL o MYSQL_* en backend/.env"
    );
  }
  return mysql.createConnection({ ...cfg, multipleStatements: true });
}

async function main() {
  // 1) Cargar JSON corregido
  if (!fs.existsSync(FIXTURE_PATH)) {
    throw new Error(`No encuentro ${FIXTURE_PATH}. Sube partidos_actualizado_1a9.json a /backend`);
  }
  const data = JSON.parse(fs.readFileSync(FIXTURE_PATH, "utf8"));

  const nuevos = data.partidos
    .filter((p) => FECHAS.includes(p.fechaId))
    .map((p) => ({
      fechaId: p.fechaId,
      grupo: p.grupo,
      equipoLocalId: p.equipoLocalId,
      equipoVisitanteId: p.equipoVisitanteId,
      hora: null,               // importante: dejar en NULL
      cancha: null,             // la asignas tú semanalmente
      estado: "por_programar",  // estado inicial
      golesLocal: null,
      golesVisitante: null,
    }));

  console.log(`Se van a reemplazar ${FECHAS.length} fechas (${FECHAS.join(", ")}).`);
  console.log(`Partidos nuevos a insertar: ${nuevos.length}.`);
  if (isDryRun) {
    console.log("DRY RUN: no se tocará la BD. Muestra 5 primeros:", nuevos.slice(0, 5));
    return;
  }

  const conn = await getConnection();
  try {
    await conn.beginTransaction();

    // 2) Backup de lo existente en 4–9
    const [existentes] = await conn.query(
      `SELECT * FROM \`${TABLE}\` WHERE fechaId IN (${FECHAS.join(",")}) ORDER BY fechaId, id`
    );
    const backupName = `backup-fixture-4a9-${Date.now()}.json`;
    fs.writeFileSync(path.join(__dirname, backupName), JSON.stringify(existentes, null, 2), "utf8");
    console.log(`📦 Backup guardado en backend/${backupName} (${existentes.length} filas).`);

    // 3) Borrar actuales 4–9
    const [delRes] = await conn.query(
      `DELETE FROM \`${TABLE}\` WHERE fechaId IN (${FECHAS.join(",")})`
    );
    console.log(`🧹 Borrados ${delRes.affectedRows} partidos de fechas 4–9.`);

    // 4) Insertar nuevos
    const sql =
      `INSERT INTO \`${TABLE}\` ` +
      `(fechaId, grupo, equipoLocalId, equipoVisitanteId, hora, cancha, estado, golesLocal, golesVisitante) ` +
      `VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    for (const p of nuevos) {
      await conn.execute(sql, [
        p.fechaId,
        p.grupo,
        p.equipoLocalId,
        p.equipoVisitanteId,
        p.hora,
        p.cancha,
        p.estado,
        p.golesLocal,
        p.golesVisitante,
      ]);
    }

    await conn.commit();
    console.log("✅ Fixture 4–9 actualizado correctamente en la base de datos.");
  } catch (err) {
    await conn.rollback();
    console.error("❌ Error, se revierte la transacción:", err.message);
    process.exitCode = 1;
  } finally {
    await conn.end();
  }
}

main().catch((e) => {
  console.error("❌ Falló el script:", e);
  process.exitCode = 1;
});
