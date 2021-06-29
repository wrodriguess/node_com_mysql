var con = require('./conexao_db.js');

con.connect(function(err){
    if(err) throw err;
    console.log("Connected!");

    //Consulta o banco de dados
    var sql = "SELECT * FROM customers WHERE id = 1";
    con.query(sql, function(err, result){
        if(err) throw err;
        console.log(result);
    });
});