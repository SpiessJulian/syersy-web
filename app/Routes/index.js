const sqlcontrollers = require('../Controllers/sqlControllers.js');
const sqlUsers = require('../Controllers/sqlUsers.js');
var settings = require('../config/settings');
var jwt = require('jsonwebtoken');

getToken = function (headers) {
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(' ');
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};

module.exports = (app, passport) =>{
	app.get('/api/navInfo', passport.authenticate("jwt", {session: false}), (req, res) =>{
		try{
			let token = getToken(req.headers);
			if (token) {
				let info = jwt.verify(token, settings.secret);
				id = info.iduser;
			    sqlUsers.AUser(id, (err, result) =>{
			    	let obj = JSON.parse(result);
			    	res.json(obj);
			    })
			} else {
				res.status(403).send({success: false, msg: 'Unauthorized.'});
			}
		}catch(e){
			console.error(e);
		}
	});




	app.get('/api/getCountries', (req, res) =>{
		try{
			sqlcontrollers.getCountries((err,result)=>{
				let obj = JSON.parse(result);
				res.json(obj);
			});
		}catch(e){
			console.error(e);
		}	
	});

	app.post('/api/getProyectsFromUser', (req, res) =>{
		try{
			sqlcontrollers.getProyectsFromUser(req.body, (err,result)=>{
				let obj = JSON.parse(result);
				res.json(obj);
			});
		}catch(e){
			console.error(e);
		}	
	});

	app.post('/api/mail', (req, res) =>{
		try{
			sqlcontrollers.RegisterMail(req.body, (err,result)=>{
				let obj = JSON.parse(result);
				res.json(obj);
			});
		}catch(e){
			console.error(e);
		}	
	});


	app.post('/api/Register', (req, res) =>{
		try{
			sqlUsers.Register(req.body, (err,result)=>{
				let obj = JSON.parse(result);
				res.json(obj);
			});
		}catch(e){
			console.error(e);
		}	
	});

	app.post('/api/Login', (req, res) =>{
		try{
			sqlUsers.Login(req.body, (err, result) =>{
				let obj = JSON.parse(result);
				let user = obj.user;
				if(user === null){
					obj.success = false;
					
				}else{
					let token = jwt.sign(JSON.stringify(user), settings.secret);
					obj.success = true;
					obj.token = 'JWT ' + token;
				}
				res.json(obj);
			});			
		}catch(err){
			console.log(err);
		}
	});

	app.get('/api/profile', passport.authenticate("jwt", {session: false}), (req, res) =>{
		try{
			let token = getToken(req.headers);
			if (token) {
				let info = jwt.verify(token, settings.secret);
				id = info.iduser;
			    sqlUsers.AUser(id, (err, result) =>{
			    	let obj = JSON.parse(result);
			    	res.json(obj);
			    })
			} else {
				res.status(403).send({success: false, msg: 'Unauthorized.'});
			}
		}catch(e){
			console.error(e);
		}
	});
};
