var mysql = require("mysql");
var dbConfig = require("./db");

var connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Mysql Connected!");
});
module.exports = connection;
