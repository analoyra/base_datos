var mysql = require('mysql');
var util = require('util');

var pool = mysql.createPool({
    connectionLimit: 10, host: process.env.MYSQL_HOST, user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD, database: process.env.MYSQL_DB_NAME
})
pool.query= util.promisify(pool.query);

module.exports = pool;

//error en la conexion
mysql.connect((err) => {
  if (err) {
      console.error('Error al conectar a la base de datos: ', err);
      return;
  }
  console.log('Conexión exitosa a la base de datos');
  
  
  });




