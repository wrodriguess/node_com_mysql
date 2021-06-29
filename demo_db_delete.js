var con = require('./conexao_db');

var sql = "DELETE FROM customers WHERE id = 17 LIMIT 1";
con.query(sql, function(err, result){
    if(err) throw err;
    console.log('Record Deleted!');

});