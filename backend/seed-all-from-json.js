// backend/seed-all-from-json.js
// Uso:
//   node backend/seed-all-from-json.js --dry-run   # vista previa (no toca BD)
//   node backend/seed-all-from-json.js             # ejecuta
//
// Requisitos (en /backend):
//   npm i mysql2 dotenv
// Credenciales: DATABASE_URL (mysql://user:pass@host:port/db) o MYSQL_* en backend/.env

const fs = require("fs");
const path = require("path");
const mysql = require("mysql2/promise");
require("dotenv").config({ path: path.join(__dirname, ".env") });

const TABLE = "partidos";
const JSON_PATH = path.join(__dirname, "partidos-data.json");
const isDryRun = process.argv.includes("--dry-run");

function parseDatabaseUrl(url) {
  const m = /^mysql:\/\/([^:]+):([^@]+)@([^:/]+):?(\d+)?\/(.+)$/.exec(url || "");
  return m
    ? { user: m[1], password: m[2], host: m[3], port: m[4] ? +m[4] : 3306, database: m[5] }
    : null;
}

async function getConn() {
  let cfg = null;
  if (process.env.DATABASE_URL?.startsWith("mysql://")) {
    cfg = parseDatabaseUrl(process.env.DATABASE_URL);
  }
  if (!cfg && process.env.MYSQL_HOST) {
    cfg = {
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      port: process.env.MYSQL_PORT ? +process.env.MYSQL_PORT : 3306,
    };
  }
  if (!cfg) throw new Error("Config MySQL no encontrada (DATABASE_URL o MYSQL_*)");
  return mysql.createConnection({ ...cfg, multipleStatements: true });
}

(async () => {
  if (!fs.existsSync(JSON_PATH)) throw new Error("No encuentro backend/partidos-data.json");
  const data = JSON.parse(fs.readFileSync(JSON_PATH, "utf8"));

  // Normalizamos por si vienen strings vacíos
  const partidos = data.partidos.map((p) => ({
    fechaId: p.fechaId,
    grupo: p.grupo,
    equipoLocalId: p.equipoLocalId,
    equipoVisitanteId: p.equipoVisitanteId,
    hora: p.hora ? String(p.hora) : null,     // NULL si no hay hora válida
    cancha: p.cancha ? String(p.cancha) : null,
    estado: p.estado || "por_programar",
    golesLocal: p.golesLocal ?? null,
    golesVisitante: p.golesVisitante ?? null,
  }));

  console.log(`Se importarán ${partidos.length} partidos desde partidos-data.json`);
  if (isDryRun) {
    console.log("DRY RUN (no se toca BD). Muestra:", partidos.slice(0, 5));
    return;
  }

  const conn = await getConn();
  try {
    await conn.beginTransaction();

    // Backup antes de borrar
    const [oldRows] = await conn.query(`SELECT * FROM \`${TABLE}\``);
    const backup = `backup-all-partidos-${Date.now()}.json`;
    fs.writeFileSync(path.join(__dirname, backup), JSON.stringify(oldRows, null, 2));
    console.log(`📦 Backup guardado: backend/${backup} (${oldRows.length} filas)`);

    // Borrar todo
    await conn.query(`DELETE FROM \`${TABLE}\``);

    // Insertar todo
    const SQL =
      `INSERT INTO \`${TABLE}\` ` +
      `(fechaId, grupo, equipoLocalId, equipoVisitanteId, hora, cancha, estado, golesLocal, golesVisitante) ` +
      `VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    for (const p of partidos) {
      await conn.execute(SQL, [
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
    console.log("✅ Importación completa: la tabla 'partidos' fue recreada desde el JSON.");
  } catch (e) {
    await conn.rollback();
    console.error("❌ Error:", e.message);
    process.exitCode = 1;
  } finally {
    await conn.end();
  }
})();
