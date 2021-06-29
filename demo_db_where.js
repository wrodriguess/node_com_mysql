var con = require('./conexao_db');

con.connect(function(err){
    if(err) throw err;
    console.log("Connected!");
    var sql = "SELECT * FROM customers WHERE address = 'Park Lane 38'";
    if(err) throw err;
    con.query(sql, function(err, result, fields){
        console.log(result);
    });
});