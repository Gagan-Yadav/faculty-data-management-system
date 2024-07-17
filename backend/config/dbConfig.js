const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

const createConnection = function (options) {
  const connection = mysql.createConnection(options);
  return connection;
};

const connection = createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "root",
  database: process.env.DB_NAME || "faculty_db",
  port: process.env.DB_PORT || 3307
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to MySQL database successfully!');
});

module.exports = connection;
