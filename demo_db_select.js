var con = require('./conexao_db');

con.connect(function(err){
    if(err) throw err;
    con.query("SELECT * FROM customers", function(err, result, fiedls){
        if(err) throw err;
        console.log(result);
    });
});