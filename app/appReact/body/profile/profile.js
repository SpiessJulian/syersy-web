import React, { Component }  from  'react';
import '../../est.css';
import './proyect.css';
import auth from '../../auth';
import axios from 'axios';
import Proyect from './proyect.js'


const style = {
		ses:{
			marginTop: "100px",
			marginLeft: "80px",
		    marginRight: "30px",
		    fontSize: "75px",
		    color: "white",
		    fontFamily: "Arial Black",
		    fontWeight: "bold",
		},
		subSes:{
			marginTop: "100px",
			marginLeft: "80px",	
		    marginRight: "30px",
		    fontSize: "25px",
		    color: "white",
		    fontFamily: "Arial Black",
		    fontWeight: "bold",
		}

	};

class Profile extends Component{

	constructor(){
		super();
		this.state = {
			Id: 0,
			User: '',
			Name: '',
			LastName:'',
			Proyects: ''
		};
	}

	componentWillMount(){
		try{
			axios.defaults.headers.common['Authorization'] = auth.getToken();
			axios.get('/api/profile')
	      	.then(res => {
	      		this.setState({
		        	Id: res.data.iduser,
		        	User: res.data.user,
		        	Name: res.data.name,
		        	LastName: res.data.lastname
		        });
	        }).then(res => {
	        	axios.defaults.headers.common['Authorization'] = auth.getToken();
				axios.post('/api/getProyectsFromUser',{
					'id': this.state.Id
				}
			)
			.then(res => {
				this.setState({
					Proyects: res.data.data
		        });
	        })})
	      .catch((error) => {
	      	if(error.response.status === 401) {
	          this.props.history.push("/login");
	        }
	      });
		}catch(e){
			console.error(e);
		}
		
	}


	render(){
		return(
			<div className="profileMainBg">
				<div>
					<br/>
					<div className="secondBg">
					<nav class="navbar navbar-dark">
					<a href="#inicio" className="navbar-brand"><img href="#inicio" src="https://syersy.com/Syersy/externalFiles/Imgs/logoNavbar2.webp" width="40px" height="40px" alt="Syersy"></img></a>
							<button class="btn btn-outline-success my-2 my-sm-0 ml-auto" id="home" type="button">Home</button>
							<button class="btn btn-outline-success my-2 my-sm-0" id="signOut" type="button">Sign Out</button>
					</nav>
					<br/>
					<div className="proyectTitle">Mis Proyectos</div>
					<br/>
						{ 
							Array.from(this.state.Proyects).map( (pro) => {			
							return(
								<Proyect key={pro.name}  pname={pro.name} ptypename={pro.typeName} ptypedesc={pro.typeDesc} pstatusname={pro.statusName} pstatustype={pro.statusType} />											
							)})
						}
						<br/>
					</div>
				</div>	
			</div>
		)
	}
}

export default Profile;
