const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Zoom@2024",
  database: "zoom",
  socketPath: "/var/run/mysqld/mysqld.sock",
});

module.exports = db;
