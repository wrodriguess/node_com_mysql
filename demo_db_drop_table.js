var con = require("./conexao_db");

var sql = "DROP TABLE IF EXISTS temp";
con.query(sql, function (err, result){
    if(err) throw err;
    console.log("Table Deleted!");
});