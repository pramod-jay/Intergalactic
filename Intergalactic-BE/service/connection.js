const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config();



var connection = mysql.createConnection({
  host: "intergalactic-db.mysql.database.azure.com",
  user: "intergalacticAdmin",
  password: "Root@123",
  database: "intergalactic",
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected to Intergalactic database")
  });

module.exports = connection;