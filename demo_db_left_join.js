var con = require('./conexao_db');

//Irá devolver todos os usuários, não importa se eles têm um produto favorito ou não
var sql = "SELECT users.name AS user, products.name AS favorite FROM users LEFT JOIN products ON users.favorite_product = products.id";

con.query(sql, function(err, result){
    if(err) throw err;
    console.log(result);
});