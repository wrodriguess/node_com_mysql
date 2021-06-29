var con = require('./conexao_db');

var sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";
con.query(sql, function(err, result){
    if(err) throw err;
    console.log("Record(s) Updated!");
});

