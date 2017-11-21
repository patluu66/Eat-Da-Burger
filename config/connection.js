// Set up MySQL connection.
var mysql = require("mysql");
var connection;

if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection("mysql://ly9p3gg259y87seo:u8wi8vj3ryxibdlj@kavfu5f7pido12mr.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/vvc8babdzmp15gvf")

} else {
  connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "",
    database: "burgers_db"
  });
};


// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;

