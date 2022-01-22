const mysql = require('mysql');
var controller = {}
const connection = require('./database.js');

controller.getCountries = (callback) =>{
	try{
		var result = JSON.stringify({success: false});
		var  sqlString = 'CALL SPSelectCountries()';
		connection.conDatos.query(sqlString, (err, results) =>{
			if(err){
				console.error('Error en  la consulta: ' + err.stack);
				result = JSON.stringify({success: false , msg: 'Ocurrio un error con la base de datos!'});
				callback(null, result);
			}else{
				result = JSON.stringify({data: results[0], success: true ,msg: 'Success'});
				console.log('data recived from db!');
				callback(null, result);
			}
		});
	}catch(e){
		console.error(e);
		result = JSON.stringify({success: false ,msg: 'Ocurrio un error con la base de datos!'});
		callback(null,result);
	}
};

controller.RegisterMail = (data, callback) =>{
	try{
		var result = JSON.stringify({success: false});
		var { mail } = data;
		var  sqlString = 'CALL SPInsertMail(?)';
		connection.conDatos.query(sqlString, [mail], (err, results) =>{
			if(err){
				result = JSON.stringify({success: false , msg: 'Ocurrio un error con la base de datos!'});
				console.error('Error en  la consulta: ' + err.stack);
				callback(null, result);
			}else{
				result = JSON.stringify({datos: results[0], success: true ,msg: 'Registro Exitoso!'});
				console.log('data inserted!');
				callback(null, result);
			}
		});
	}catch(e){
		console.error(e);
		result = JSON.stringify({success: false ,msg: 'Ocurrio un error con la base de datos!'});
		callback(null,result);
	}
	
};


controller.getProyectsFromUser = (data, callback) =>{
	try{
		var result = JSON.stringify({success: false});
		var { id } = data;
		var  sqlString = 'CALL SPSelectProyectsFromUserFull(?)';
		connection.conDatos.query(sqlString, [id], (err, results) =>{
			if(err){
				console.error('Error en  la consulta: ' + err.stack);
				result = JSON.stringify({success: false , msg: 'Ocurrio un error con la base de datos!'});
				callback(null, result);
			}else{
				result = JSON.stringify({data: results[0], success: true ,msg: 'Success'});
				console.log('data recived from db!');
				callback(null, result);
			}
		});
	}catch(e){
		console.error(e);
		result = JSON.stringify({success: false ,msg: 'Ocurrio un error con la base de datos!'});
		callback(null,result);
	}
};

module.exports = controller;
