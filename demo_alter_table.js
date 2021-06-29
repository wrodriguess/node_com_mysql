var con = require('./conexao_db');

con.connect(function(err){
    if(err) throw err;
    console.log("Connected");
    
    var sql = "ALTER TABLE customers ADD COLUMN lastname VARCHAR(255)";
    con.query(sql, function(err, result){
        if(err) throw err;
        console.log("Table Altered!");
    });
});