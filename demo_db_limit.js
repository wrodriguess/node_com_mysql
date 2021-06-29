var con = require('./conexao_db');

sql = "SELECT * FROM customers ORDER BY name LIMIT 5";
con.query(sql, function (err, result){
    if (err) throw err;
    console.log(result);
});