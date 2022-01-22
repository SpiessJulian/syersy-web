const mysql = require('mysql');
var con = {};
try{
	var con = mysql.createConnection({
	  	host: 'LocalHost',
		user: 'syeraeba_seswebuser',
		password: 'aceitedemoto',
		port: 3306,
		database: 'syeraeba_seswebusers',
	});

	var conDatos = mysql.createConnection({
	  	host: 'LocalHost',
		user: 'syeraeba_seswebuser',
		password: 'aceitedemoto',
		port: 3306,
		database: 'syeraeba_seswebdata',
	});

}catch(e){
	//Si ocurre algun error.
	console.error('Error al  conectar con la base de datos!')
	console.error(e);
}




//Exportaciones del modulo.
module.exports = {con, conDatos};