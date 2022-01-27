import React, { Component }  from  'react';
import './contact.css';
import "../layoutLg.css";

class Contactenos extends Component{
	constructor(){
		super();
		this.state = {
			
		};
	}

	render(){
		return(
			<div id="contactenos" className="mainContainer contact">
				<br/>
				<div>
					<h1 className="contactSes">Contact!</h1>
					<p className="subSes">
						You can send us an email to<br/>
						info@syersy.com<br/>   
						or call us at<br/>  
						+54 9 3624 774118<br/>
						(You can communicate with us through WhatsApp)<br/>
						Resistencia Chaco - Argentina. 
					</p>
					<br/>
				</div>
			</div>
		)
	}
}

export default Contactenos;
