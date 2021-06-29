var con = require('./conexao_db.js');

con.connect(function(err){
    if(err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE mydb", function (err, result){
        if(err) throw err;
        console.log("Database created!");
    });
});