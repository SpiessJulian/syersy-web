const sha256 = require('js-sha256');

//Exportación del modulo.
module.exports = {
	storeToken(tok){
		try{
			localStorage.setItem('jwtToken', tok);
		}catch(e){
			console.error(e);
		}
	},

	getToken(){
		try{
			const token = localStorage.getItem('jwtToken');
			return token;
		}catch(e){
			console.error(e);
		}
		
	},

	generateHash(password){
		return sha256(password);	
	}

};
