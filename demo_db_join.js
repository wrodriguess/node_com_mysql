var con = require('./conexao_db');

//Irá devolver apenas os usuários que possuem um produto favorito
var sql = "SELECT users.name AS user, products.name AS favorite FROM users JOIN products ON users.favorite_product = products.id";
con.query(sql, function(err, result){
    if(err) throw err;
    console.log(result);
});