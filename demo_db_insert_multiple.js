var con = require('./conexao_db');

con.connect(function(err){
    if(err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO customers (name, address, lastname) VALUES ?";
    var values = [
        ['John', 'Highway 71', 'Silva'],
        ['Peter', 'Lowstreet 4', 'Santos'],
        ['Amy', 'Apple st 652', 'Oliveira'],
        ['Hannah', 'Mountain 21', 'Souza'],
        ['Michael', 'Valley 345', 'Rodrigues'],
        ['Sandy', 'Ocean blvd 2', 'Ferreira'],
        ['Betty', 'Green Grass 1', 'Alves'],
        ['Richard', 'Sky st 331', 'Pereira'],
        ['Susan', 'One way 98', 'Lima'],
        ['Vicky', 'Yellow Garden 2', 'Gomes'],
        ['Ben', 'Park Lane 38', 'Ribeiro'],
        ['William', 'Central st 954', 'Martins'],
        ['Chuck', 'Main Road 989', 'Silva'],
        ['Viola', 'Sideway 1633', 'Santos']
    ];
    con.query(sql, [values], function(err, result){
        if(err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });
});