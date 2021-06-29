var con = require('./conexao_db');

con.connect(function(err){
    if(err) throw err;
    con.query("SELECT name, address FROM customers", function(err, result, fields){
        if(err) throw err;
        console.log(fields); //Contem informações sobre cada campo como um objeto
    });
});