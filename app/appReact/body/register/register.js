import React, { Component }  from  'react';
import '../../est.css';
import AlertUser from '../../alertDismissable.js';
import axios from 'axios';
import auth from '../../auth';
import Select from "react-dropdown-select";

const style = {
	mainContainer:{
		minHeight: '950px',
		background: "./images/syersy.png", 
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		backgroundColor: "rgba(0, 0, 0, 0.7)",
		
	},

	registerForm:{
		marginTop: "130px",
		marginLeft: "80pxvw",
		marginRight: "30pxvw",
		color: "white",
		fontWeight: "bold",
	},

	dropdown:{
		backgroundColor: "white",
		color: "grey",
		
	}

};

class Register extends Component{
	constructor(){
		super();
		this.state = {
			countries: '',
			Country: 0,
			CountryV: false,
			Mail: '',
			MailV: false,
			Name: '',
			NameV: false,
			LastName: '',
			LastNameV: false,
			Pass: '',
			PassV: false,
			Pass2: '',
			Pass2V: false,
			Agreement: false,
			MShow: false,
			MTitle: '',
			MMessage: '',
			MType: '',
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.validate = this.validate.bind(this);
		this.addUser = this.addUser.bind(this);
		this.CheckB = this.CheckB.bind(this);
		this.DropdownListDefault = this.DropdownListDefault.bind(this);
		this.DropdownOnChange = this.DropdownOnChange.bind(this);
	}


	componentWillMount(){
		try{
			axios.get('/api/getCountries', {
				
			})
			.then(res => {
				let info =  res.data;
	     		this.setState({
		        	countries:  info.data,
		        });
	        })
		}catch(e){
			console.error(e);
		}
	}

	
	onChange(e){
		try{
			this.setState({
				[e.target.name]: e.target.value,
			});
			

			if(e.target.value === ''){
				e.target.className = "form-control";
				e.target.className += ' is-invalid';
				this.setState({
					[e.target.name.concat('V')]: false
				});
			}else{
				e.target.className = "form-control";
				e.target.className += ' is-valid';
				this.setState({
					[e.target.name.concat('V')]: true
				});

				if(e.target.name === 'Pass2' || e.target.name === 'Pass'){
					if(document.getElementById('validationPass').value === document.getElementById('validationPass2').value){
						document.getElementById('validationPass').className = "form-control";
						document.getElementById('validationPass').className += ' is-valid';
						document.getElementById('validationPass2').className = "form-control";
						document.getElementById('validationPass2').className += ' is-valid';
						this.setState({
							[document.getElementById('validationPass').name.concat('V')]: true,
							[document.getElementById('validationPass2').name.concat('V')]: true
						});
					}else{
						document.getElementById('validationPass').className = "form-control";
						document.getElementById('validationPass').className += ' is-invalid';
						document.getElementById('validationPass2').className = "form-control";
						document.getElementById('validationPass2').className += ' is-invalid';
						this.setState({
							[document.getElementById('validationPass').name.concat('V')]: false,
							[document.getElementById('validationPass2').name.concat('V')]: false
						});
					}
				}
				
			}
		}catch(e){
			console.error(e);
		}
		
	}

	onSubmit(e){
		if(this.validate()){
			e.preventDefault();
			this.addUser(e);
		}else{
			e.preventDefault();
		}
	}

	validate(){
		if(this.state.MailV && this.state.NameV && this.state.LastNameV && this.state.PassV && this.state.Pass2V && this.state.CountryV && this.state.Agreement){
			return true;
		}else{
			return false;
		}
	}

	CheckB(e){
		try{
			this.setState({Agreement: !this.state.Agreement})
			if(this.state.Agreement){
				e.target.className="form-check-input"
				e.target.className += ' is-invalid'
			}else{
				e.target.className="form-check-input"
				e.target.className += ' is-valid'
			}
		}catch(e){
			console.error(e);
		}
		
		
	}

	addUser(e){
		try{
			let passSend = auth.generateHash(this.state.Pass);
			axios.post('/api/register', {
				'Mail': this.state.Mail,
				'Name': this.state.Name,
				'LastName': this.state.LastName,
				'Pass': passSend,
				'Country': this.state.Country,
				'Image': null,
			})
			.then(res => res.data)
			.then(data => {
				if(data.success){
					this.setState({
						Mail: '',
						MailV: false,
						Name: '',
						NameV: false,
						LastName: '',
						LastNameV: false,
						Pass: '',
						PassV: false,
						Pass2: '',
						Pass2V: false,
						Country: '',
						CountryV: false,
						Agreement: false,
						MShow: true,
						MTitle: data.msg,
						MMessage: '',
						MType: 'alert-success'
					});
				}else{
					this.setState({
						MShow: true,
						MTitle: data.msg,
						MMessage: '',
						MType: 'alert-danger'
					});
				}
				this.forceUpdate();
				this.setState({
					MShow: false,
					MTitle: '',
					MMessage: '',
					MType: ''
				});
			})
		}catch(e){
			console.error(e);
		}	
	}

	



	DropdownListDefault(){
		let options = [];
		for(let i= 0; i < this.state.countries.length;i++){
			options.push({label: this.state.countries[i].name, value: this.state.countries[i].idcountry});
		}
		return(
			options
		)
	}


	DropdownOnChange(e){
		if (e[0]){
			this.setState({
				Country: (e[0].value),
				CountryV: true,
			});
			
		}
	}



	render(){
		return(
			<div style={style.mainContainer}>
				<br/>
				<AlertUser Show={this.state.MMostrar} Title={this.state.MTitulo} Message={this.state.MMessage} Type={this.state.MType} />
				<div className="container bloqueSolido" style={style.registerForm}>
					<form className="needs-validation" onSubmit={this.onSubmit} noValidate>
						<div className="form-row">
					    	<div className="col-md-4 mb-3">
						    	<label htmlFor="validationCustomUsername">Correo Electrónico</label>
						      	<div className="input-group">
						        	<div className="input-group-prepend">
						          		<span className="input-group-text" id="inputGroupPrepend"></span>
						        	</div>
						        	<input value={this.state.Mail} onChange={e => this.onChange(e)} name= "Mail" type="text" className="form-control" id="validationCustomUsername" placeholder="Correo Electrónico" aria-describedby="inputGroupPrepend" required />
						        	<div className="invalid-feedback">
						          		Por Favor Ingrese su Correo Electrónico.
						        	</div>
						      	</div>
						    </div>
					  	</div>
					  	<div className="form-row">
					    	<div className="col-md-4 mb-3">
					      		<label htmlFor="validationName">Nombre</label>
					      		<input value={this.state.Name} onChange={e => this.onChange(e)} name= "Name" type="text" className="form-control" id="validationCustom01" placeholder="Nombre"  required />
					      		<div className="valid-feedback">
					        		Se ve Bien!
					      		</div>
					    	</div>
					    	<div className="col-md-4 mb-3">
					      		<label htmlFor="validationLastName">Apellido</label>
					      		<input  value={this.state.LastName} onChange={e => this.onChange(e)} name= "LastName" type="text" className="form-control" id="validationCustom02" placeholder="Apellido"  required />
					      		<div className="valid-feedback">
					        		Se ve Bien!
					      		</div>
					    	</div>
						</div>
					  	<div className="form-row">
						  	<div className="col-md-4 mb-3">
						  		<label>País</label>

								{<Select onChange={e => this.DropdownOnChange(e)} options={this.DropdownListDefault()}  placeholder="Selecionar País"  style={style.dropdown}/>}
							</div>
						</div>
					  	<div className="form-row">
					    	<div className="col-md-4 mb-3">
						        <label htmlFor="validationPass">Contraseña</label>
						        <input value={this.state.Pass} onChange={e => this.onChange(e)} name= "Pass" type="Password" className="form-control" id="validationPass" placeholder="Contraseña"  required />
						        <div className="valid-feedback">
						          Se ve Bien!
						        </div>
					        </div>
					  	</div>
					  	<div className="form-row">
					    	<div className="col-md-4 mb-3">
						        <label htmlFor="validationPass2">Repetir Contraseña</label>
						        <input value={this.state.Pass2} onChange={e => this.onChange(e)} name= "Pass2" type="Password" className="form-control" id="validationPass2" placeholder="Repetir Contraseña"  required />
						        <div className="valid-feedback">
						        	Se ve Bien!
						        </div>
						        <div className="invalid-feedback">
					       			Las contraseñas deben coincidir.
					      		</div>
					        </div>
					  	</div>
					  	<div className="form-group">
					   		<div className="form-check">
					      		<input name= "Agreement" onChange={e => this.CheckB(e)} className="form-check-input" type="checkbox" value='' id="invalidCheck" required />
					      		<label className="form-check-label" htmlFor="invalidCheck">
					        		Agree to terms and conditions
					      		</label>
						    	<div className="invalid-feedback">
						        	You must agree before submitting.
						    	</div>
							</div>
						</div>
						<button id="register" className="btn btn-primary" onClick={e => this.onSubmit(e)} type="submit">Registrarse</button>
					</form>
				</div>
			</div>
		)
	}
}

export default Register;
