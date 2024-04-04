const mysql = require('mysql2');
const createConnection  = function (options) {
	const connection = mysql.createConnection(options);
	return connection;
};
var connection = createConnection({
  host     : "localhost",
  user     : "root",
  password : "root",
  database : "faculty_db",
  port     : 3307
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to MySQL database successfully!');
});

module.exports = connection;