//Imports.
import React, { Component }  from  'react';
import "./team.css";
import "../layoutLg.css";

const style = {
	image: {
		width: "160px",
		height: "220px",
		borderRadius: "20px"
	},
};

class Team extends Component{
	constructor(){
		super();
		this.state = {
			
		};
	}

	render(){
		return(
			<div id="equipo" className="teamBg team">
				<div>
					<h1 className="teamTitle">Team</h1>
				</div>
				<div className="centered">
					<div className="team-member juli">
						<img style={style.image} className="mx-auto picShape"  src="./images/julian.jpg" alt="Julian Spiess"/>
						<h4 className="julianText">Julian Spiess</h4>
						<h6 id="underTxt">Co-founder / CEO</h6>
					</div>
					<div className="team-member ale"> 
						<img style={style.image} className="mx-auto picShape" src="./images/alejandro.jpeg" alt="Alejandro Ravarotto"/> 
						<h4 className="aleText">Alejandro Ravarotto</h4> 
						<h6 id="underTxt">Co-founder / Programmer</h6> 
					</div>
				</div>	
			</div>
		)
	}
}

export default Team;
