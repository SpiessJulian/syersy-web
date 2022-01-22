import React, { Component }  from  'react';
import './footerstyles.css';
import "../body/home/layoutLg.css";
import axios from 'axios';


class Pie extends Component{

	constructor(){
		super();
		this.state = {
			mail: '',
			MessageV: false,
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.SubscriptionOk = this.SubscriptionOk.bind(this);
	}

	onChange(e){
		this.setState({
			[e.target.name]: e.target.value,
		});
	}

	onSubmit(e){
		try{
			if( this.state.mail != ""){
				if(document.getElementById("formEmail").checkValidity()){
					axios.post('/api/mail',{
						'mail': this.state.mail,
					})
					.then(res => res.data)
					.then(data => {	
						if(data.success){
							this.setState({
								mail: '',
								MessageV: true,
							});
						}
					})
					.catch(err => console.error(err))
					e.preventDefault();
				}else{
					document.getElementById("formEmail").reportValidity();
				}
			}else{
				e.preventDefault()
			}
		}catch(e){
			console.error(e);
		}
	}


	SubscriptionOk(pshow){
		if(pshow){
			return(
					<a>Gracias por Suscribirse!</a>
				)
		}else{
			return null;
		}
	}

	render(){
		return(
			<footer id="footer" className="foot">
			    <div className="footer-top">
			      <div className="container">
			        <div className="row">
			          <div className="col-lg-3 col-md-6 footer-info">
			            <h3>Syersy</h3>
			            <p>We are a software development company. Our goal is to create powerful products that meet our customers’ demands creating new opportunities for them always having quality and reliability as our main foundation.</p>
			          </div>
			          <div className="col-lg-3 col-md-6 footer-links">
			            <h4>Useful Links</h4>
			            <ul>
			              <li><i className="ion-ios-arrow-right"></i> <a href="#inicio">Home</a></li>
			              <li><i className="ion-ios-arrow-right"></i> <a href="#sobreNosotros">About Us</a></li>
			              <li><i className="ion-ios-arrow-right"></i> <a href="#servicios">Services</a></li>
						  <li><i className="ion-ios-arrow-right"></i> <a href="#equipo">Team</a></li>
						  <li><i className="ion-ios-arrow-right"></i> <a href="#contactenos">Contact</a></li>
			              <li><i className="ion-ios-arrow-right"></i> <a href="#">Terms of Service</a></li>
			              <li><i className="ion-ios-arrow-right"></i> <a href="#">Privacy Policy</a></li>
			            </ul>
			          </div>

			          <div className="col-lg-3 col-md-6 footer-contact">
			            <h4>Contact</h4>
			            <p>
			              
			              Chaco, Resistencia 3500<br />
			              Argentina <br />
			              <strong>Phone:</strong> +54 9 3624 149755<br />
			              <strong>Email:</strong> info@syersy.com<br />
			            </p>
			            <div className="social-links">
			              <a href="https://twitter.com/Syersy1" className="twitter"><i className="fab fa-twitter"></i></a>
			              <a href="https://www.facebook.com/Syersy-102919204553920/" className="facebook"><i className="fab fa-facebook"></i></a>
			              <a href="https://www.instagram.com/syersy_official" className="instagram"><i className="fab fa-instagram"></i></a>
			              <a href="https://linkedin.com/company/syntax-e-systems" className="linkedin"><i className="fab fa-linkedin"></i></a>
			            </div>
			          </div>
			          <div className="col-lg-3 col-md-6 footer-newsletter">
			            <h4>News</h4>
			            <p>If you want to receive the latest news about our products subscribe by leaving your email below</p>
			            	<form id="formEmail">
				              <input type="email" name="mail" onChange={e => this.onChange(e)} value={this.state.mail}/>
				              <input type="submit" value="Subscribe" onClick={e => this.onSubmit(e)} />
				            </form>
				            {this.SubscriptionOk(this.state.MessageV)}
			          </div>
			        </div>
			      </div>
			    </div>
			    <div className="container">
			      <div className="copyright">
			        &copy; Copyright <strong>Syersy</strong>. All rights reserved.
			      </div>
			      <div className="credits">
			        Designed by <a href="/">Syersy</a>
			      </div>
			    </div>
			</footer>
		)
	}
}

export default Pie;
