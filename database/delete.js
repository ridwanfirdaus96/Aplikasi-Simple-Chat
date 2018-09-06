var mysql = require('mysql');

var con = mysql.createConnection({
    host : "localhost",
    user : "root",
    password: "",
    database: "chatdb"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("connected!");
    var sql = "DELETE FROM customers";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log("Number of records deleted: " + result.affectedRows);
    });
});