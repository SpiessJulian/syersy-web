import React, { Component } from 'react';
import '../../est.css';
import auth from '../../auth';
import AlertUser from '../../alertDismissable.js';
import axios from 'axios';

class login extends Component{
	constructor(){
		super();
		this.state = {
			Mail: '',
			MailV: false,
			Pass: '',
			PassV: false,
			MShow: false,
			MTitle: '',
			MMessage: '',
			MType: '',
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.validate = this.validate.bind(this);
		this.logUser =  this.logUser.bind(this);
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
			}
		}catch(e){
			console.error(e);
		}
		
	}

	onSubmit(e){
		if(this.validate()){
			this.logUser(e);
			
		}else{
			e.preventDefault();
		}
	}

	validate(){
		if(this.state.MailV && this.state.PassV){
			return true;
		}else{
			return false;
		}
	}

	logUser(e){
		try{
			let passSend = auth.generateHash(this.state.Pass);
			axios.post('/api/login',{
				'Mail': this.state.Mail,
				'Pass': passSend
			})
			.then(res => res.data)
			.then(data => {	
				if(data.success){
					auth.storeToken(data.token);
					this.props.history.push('/profile');
				}else{
					this.setState({
						MShow: true,
						MTitle: data.msg,
						MMessage: '',
						MType: 'alert-danger'
					});
					this.forceUpdate();
					this.setState({
						MShow: false,
						MTitle: '',
						MMessage: '',
						MType: ''
					});
				}
			})
			.catch(err => console.error(err))
			e.preventDefault();
		}catch(e){
			console.error(e);
		}
	}

	goToMainPage(){
		this.props.history.push("/");
	}
	
	render(){
		return(
			<div className="LogGrid">
				<div className="loginLogo">
					<img src="./images/syersy.png" alt="Syersy Logo"></img>
				</div>
					<AlertUser Show={this.state.MShow} Title={this.state.MTitle} Message={this.state.MMessage} Type={this.state.MType} />
					<div className="container bloque logForm">
						<form className="needs-validation" noValidate>
							<div className="form-row">
								<h1 className="ingresarTitle">Ingresar</h1>
								</div>
								<div className="form-row">
						    	<div className="">
							      <label htmlFor="validationCustomUsername">Correo Electrónico</label>
							      <div className="input-group">
							        <div className="input-group-prepend">
							          <span className="input-group-text" id="inputGroupPrepend"></span>
							        </div>
							        <input value={this.state.Mail} onChange={e => this.onChange(e)} name= "Mail" type="text" className="form-control" id="validationCustomUsername" placeholder="Correo Electrónico" aria-describedby="inputGroupPrepend" required />
							        <div className="invalid-feedback">
							          Debe completar ambos campos!
							        </div>
							      </div>
							    </div>
						  	</div> 
							<div className="form-row passWidth">
							    <div className="passPadding">
								    <label htmlFor="validationPass">Contraseña</label>
									<div className="input-group">
							        <div className="input-group-prepend">
							          <span className="input-group-text" id="inputGroupPrepend"></span>
							        </div>
								    <input value={this.state.Pass} onChange={e => this.onChange(e)} name= "Pass" type="Password" className="form-control" id="validationPass" placeholder="Contraseña"  required />
							    </div>
								</div>
							</div>
							<button id="login" className="btn btn-success ingresarButton" onClick={e => this.onSubmit(e)} type="submit">Ingresar</button>
							<br />
							<button id="login" className="btn btn-outline-success volverButton" onClick={e => this.onSubmit(this.goToMainPage())} type="button">Volver</button>
						</form>
					</div>
				</div>
		)
	}
}

export default login;
