var mysql = require('mysql');

var con = mysql.createConnection({
    host : "localhost",
    user : "root",
    password: "",
    database: "chatdb"
});

con.connect(function(err) {
    if (err) throw err;
    con.query("DROP TABLE FROM customers", function (err, result, fields){
        if (err) throw err;
      console.log('Table Deteled');
    });
  });