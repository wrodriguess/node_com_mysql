var con = require('./conexao_db');

//Irá devolver todos os produtos e os usuários que os têm como favoritos, mesmo que nenhum usuário os tenha como favoritos
var sql = "SELECT users.name AS user, products.name AS favorite FROM users RIGHT JOIN products ON users.favorite_product = products.id";

con.query(sql, function (err, result){
    if (err) throw err;
    console.log(result);
});