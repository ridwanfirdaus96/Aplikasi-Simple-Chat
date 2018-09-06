var mysql = require('mysql');

var con = mysql.createConnection({
    host : "localhost",
    user : "root",
    password: "",
    database: "chatdb"
});

con.connect(function(err) {
    if (err) throw err;
    var sql = "UPDATE customers SET address = 'Dangdeur' WHERE address = 'jl.cimahi no.1'";
    con.query(sql, function (err, result, fields){
        if (err) throw err;
      console.log(result.affectedRows + "record(s) updated");
    });
  });