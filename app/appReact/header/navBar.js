import React, { Component }  from  'react';
import './headerstyles.css'
import auth from '../auth';
import axios from 'axios';

class NavBar extends Component{
	constructor(){
		super();
		this.state = {
			privileges: 0, 
			imagePath: "./images/syersyLogoWhite.png"
		};
		
		this.logout = this.logout.bind(this);
		this.bar = this.bar.bind(this);
		this.handleScroll = this.handleScroll.bind(this);
	}

	componentWillMount(){
		if(auth.getToken()){
			try{
				axios.defaults.headers.common['Authorization'] = auth.getToken();
				axios.get('/api/navInfo')
		      	.then(res => {
		      		this.setState({
			        	privileges: res.data.privileges
			        });	        
		        })
		      .catch((error) => {
		      	if(error.response.status === 401) {
		          this.props.history.push("/login");
		        }
		      });
			}catch(e){
				console.error(e);
			}
		}else{
			
		}
	}


	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll, { passive: true })
  	}

  	handleScroll() {
  		if(window.pageYOffset < 50) {
			document.getElementById('header').className = 'headerOnTop';
			this.setState({
				imagePath: "./images/syersyLogoWhite.png"
			});
      	}else{
			document.getElementById('header').className = 'headerOnScroll';
			this.setState({
				imagePath: "./images/syersyLogoGreen.png",
			});
      	}
	}
	  
	  
	logout(){
		localStorage.removeItem('jwtToken');
		this.props.history.push("/login");
	}

	bar(){
		const isAlreadyAuth = auth.getToken();
		if(isAlreadyAuth){
			if(this.state.privileges == 0){
				return(
					<nav className="navbar navbar-expand-lg navbar-dark" >
						<div id="logo" className="pull-left">
							<h1><a href="/" className="scrollto">Syersy</a></h1>
						</div>

						<div className="form-inline my-2 my-lg-0 loginlogout">
							<button className="btn btn-outline-success my-2 my-sm-0" onClick={e => this.logout()}>Salir</button>
						</div>

						<button className="navbar-toggler hamburgerBtn" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
							<span><i className="fas fa-bars hamburger" id="hamburger"></i></span>
						</button>

						<div className="collapse navbar-collapse" id="navbarNav"> 
							<ul className="nav-menu navbar-nav ml-auto">
								<li className="menu-active"><a href="/">Inicio</a></li>
								<li><a href="/profile">Mi Cuenta</a></li>
								<li><a href="/sobreNosotros">Sobre Nosotros</a></li>
								<li><a href="/Servicios">Servicios</a></li>
								<li><a href="/team">Equipo</a></li>
								<li><a href="/contactenos">Contact</a></li>  
							</ul>
						</div>	
					</nav>
					)
			}else{
				return(
					<nav className="navbar navbar-expand-lg navbar-dark" >
				    <div id="logo" className="pull-left">
				     	<h1><a href="/" className="scrollto">Syersy</a></h1>
				    </div>

				    <div className="form-inline my-2 my-lg-0  loginlogout">
						<button className="btn btn-outline-success my-2 my-sm-0" onClick={e => this.logout()}>Salir</button>
					</div>

					<button className="navbar-toggler hamburgerBtn" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span><i className="fas fa-bars hamburger" id="hamburger"></i></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarNav"> 
				        <ul className="nav-menu navbar-nav ml-auto">
							<li className="menu-active"><a href="/">Inicio</a></li>
							<li><a href="/profile">Mi Cuenta</a></li>
							<li><a href="/sobreNosotros">Sobre Nosotros</a></li>
							<li><a href="/Servicios">Servicios</a></li>
							<li><a href="/team">Equipo</a></li>
							<li><a href="/contactenos">Contact</a></li>   
				        </ul>
				    </div>	
				</nav>
					)	
			}
		}else{
			return(
				<nav className="navbar navbar-expand-lg navbar-dark" >
				    <a href="#inicio"><img href="#inicio" src={this.state.imagePath} width="40px" height="40px" alt="Syersy"></img></a>
				    <div className="form-inline my-2 my-lg-0 loginlogout">
					    	<a className="btn btn-outline-success" href='/login'>Sign In</a>
					</div>

					<button className="navbar-toggler hamburgerBtn" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span><i className="fas fa-bars hamburger" id="hamburger"></i></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarNav"> 
				        <ul className="nav-menu navbar-nav ml-auto">
							<li className="menu-active"><a href="#inicio">Home</a></li>
							<li><a href="#sobreNosotros">About Us</a></li>
							<li><a href="#servicios">Services</a></li>
							<li><a href="#equipo">Team</a></li> 
							<li><a href="#contactenos">Contact</a></li> 
				        </ul>
				    </div>	
				</nav>
			)
		}
		
	}

	render(){
		return(
			<div id="header">
				{this.bar()}
			</div>
		)
	}
}

export default NavBar;
