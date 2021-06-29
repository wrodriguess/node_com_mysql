var con = require('./conexao_db');

var name = 'Michel'; //Posteriomente esses valores virão de front-end
var address = 'First Avenue';
var lastname = 'Temer';

var sql = "INSERT INTO customers (name, address, lastname) VALUES (?, ?, ?)";
con.query(sql, [name, address, lastname], function (err, result){
    if(err) throw err;
    console.log('New record inserted!');
});