var con = require('./conexao_db');

//Aparentemente não é necessário realizar o comando con.connect(function(err)...) como foi feito nos arquivos anteriores
con.query("SELECT * FROM customers ORDER BY name", function (err, result){
    if(err) throw err;
    console.log(result);
});