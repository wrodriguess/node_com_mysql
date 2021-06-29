var con = require('./conexao_db');

con.connect(function(err){
    if(err) throw err;
    var sql = "SELECT * FROM customers WHERE address LIKE 'S%'"; //Selecione clientes onde a primeira letra do endereço seja S
    con.query(sql, function(err, result){
        if(err) throw err;
        console.log(result);
    });
});