var con = require('./conexao_db');

con.connect(function(err){
    if(err) throw err;
    con.query("SELECT name FROM customers WHERE id = 15", function(err, result, fields){
        if(err) throw err;
        console.log(result);
    });
});