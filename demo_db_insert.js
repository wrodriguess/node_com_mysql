var con = require('./conexao_db');

con.connect(function(err){
    if(err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO customers(name, address, lastname) VALUES ('Company Inc', 'Highway 37', 'Afonso')";
    con.query(sql, function(err, result){
        if(err) throw err;
        console.log("New record inserted!");
    });
});