const coneccion = require('./database.js');
const bcrypt = require('bcrypt-nodejs');
var controller = {}

generateHash = (password) =>{
	try{
		const salt = bcrypt.genSaltSync(10);
		const hash = bcrypt.hashSync(password, salt);
		return hash;
	}catch(e){
		console.error(e);
	}
	
}

validatePassword = (password, dbPassword) =>{
	try{
		return bcrypt.compareSync(password, dbPassword);
	}catch(e){
		console.error(e);
	}
}

controller.Register = (datos, callback) =>{
	try{
		var result = JSON.stringify({success: false});
		var { Mail, Name, LastName, Pass, Country, Image } = datos;
		Password = generateHash(Pass);
		var  sqlString = 'CALL SPUserExist( ?)';
		coneccion.con.query(sqlString, [Mail], (err,results) =>{
			if(err){
				console.error('Error en  la consulta: ' + err.stack);
				result = JSON.stringify({success: false ,msg: 'Ocurrio un error con la base de datos!'});
				callback(null, result);
			}else{
				if(results[0].length > 0){
					console.error('El Usuario ya existe!');
					result = JSON.stringify({success: false ,msg: 'El Usuario ya existe!'});
					callback(null,result);
				}else{
					sqlString = 'CALL SPInsertUser( ?, ?, ?, ?, ?, ?)';
					coneccion.con.query(sqlString, [Mail, Password, Name, LastName, Image, Country], (err, results) =>{
						if(err){
							console.error('Error en  la consulta: ' + err.stack);
							result = JSON.stringify({success: false ,msg: 'Ocurrio un error con la base de datos!'});
							callback(null,result);
						}else{
							console.log('data inserted!');
							result = JSON.stringify({success: true ,msg: 'Usuario agregado con exito!'});
							callback(null,result);
						}
					});
				}
			}
		});
	}catch(e){
		console.error(e);
		result = JSON.stringify({success: false ,msg: 'Ocurrio un error con la base de datos!'});
		callback(null,result);
	}
		
},

controller.Login = (datos, callback) =>{
	try{
		var result = JSON.stringify({user: null, success: false});
		var {Mail, Pass} = datos;
		var  sqlString = 'CALL SPlogin(?)';
		coneccion.con.query(sqlString, [Mail], (err, results) =>{
			if(err){
				console.error('Error en  la consulta: ' + err.stack);
				result = JSON.stringify({user: null, success: false, msg: 'Ha ocurrido un error en la consulta!'});
				callback(null,result);
			}else{
				if(results[0][0]){
					if(validatePassword(Pass, results[0][0].password)){
						console.log('data recived from db!');
						result = JSON.stringify({user: results[0][0], success: true, msg: 'Success'});
						callback(null,result);
					}else{
						result = JSON.stringify({user: null, success: false, msg: 'Authentication failed. Usuario y/o password incorrecto.'});
						callback(null,result);
					}
				}else{
					result = JSON.stringify({user: null, success: false, msg: 'Authentication failed. Usuario y/o password incorrecto.'});
					callback(null,result);
				}
			}
		});
	}catch(e){
		console.error(e);
		result = JSON.stringify({success: false ,msg: 'Ocurrio un error con la base de datos!'});
		callback(null,result);
	}	
},

controller.AUser = (id, callback) =>{
	try{
		var result = null;
		var  sqlString = 'CALL SPAUser(?)';
		coneccion.con.query(sqlString,  [id], (err, results) =>{
			if(err){
				console.error('Error en  la consulta: ' + err.stack);
				result = null;
				callback(null,result);
			}else{
				console.log('data recived from db!');
				result = JSON.stringify(results[0][0]);
				callback(null,result);
			}
		});
	}catch(e){
		console.error(e);
	}	
}

module.exports = controller;










