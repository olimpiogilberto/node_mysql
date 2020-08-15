const mysql = require('mysql');
const connection = mysql.createConnection({
    host : 'localhost',
    port : '3306',
    user : 'user_node',
    password : 'admin',
    database : 'node_mysql'

});

function createTable(conn){
 
    const sql = "CREATE TABLE IF NOT EXISTS Clientes ( ID int NOT NULL AUTO_INCREMENT,Nome varchar(150) NOT NULL,"+
                "CPF char(11) NOT NULL, PRIMARY KEY (ID) );";
    
    conn.query(sql, function (error, results, fields){
        if(error) return console.log(error);
        console.log('Criou a tabela!');
    });
}

connection.connect(function(err){
  if(err) return console.log(err);
  console.log('Banco conectado!!');
  createTable(connection);
})

function addRows(conn){
//   const sql = "INSERT INTO Clientes(Nome,CPF) VALUES ?";
//   const values = [
//         ['Giba', '32672467846'],
//         ['Vini', '41885192827'],
//         ['teste3', '12312312399']
//       ];
  conn.query(sql, [values], function (error, results, fields){
          if(error) return console.log(error);
          console.log('Clientes cadastrados!!');
          conn.end();//fecha a conexão
      });
}