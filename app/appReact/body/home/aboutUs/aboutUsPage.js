import React, { Component }  from  'react';
import './aboutUs.css';
import "../layoutLg.css";


class AboutUsPage extends Component{
	constructor(){
		super();
		this.state = {
			
		};
	}


	render(){
		return(
			<div id="sobreNosotros" className="aboutUsContainer aboutUs">
				<div className="aboutUsWords">
				<h1 className="aboutUsSes">About Us</h1>
				<h2 className="aboutUsSubSes">
					We are a software development company.<br/>
					Our main goal is to satisfy the needs of our customers<br/> 
					offering high quality software following  international standards.<br/>
				</h2>
				</div>
			</div>
		)
	}
}

export default AboutUsPage;
