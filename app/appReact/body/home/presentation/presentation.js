import React, { Component }  from  'react';
import './presentation.css';
import "../layoutLg.css";


class Presentation extends Component{
	constructor(){
		super();
		this.state = {
			
		};
	}

	render(){
		return(
			<div id="inicio" className="presentationMainContainer presentation">
				<div>
					<br />
					<div>
						<img src="./images/syersy.png" className="syersyHome"></img>
						<h1 className="presentationSubSes"> 
						Websites - Management Systems - Android Apps 
						</h1>
					</div>
				</div>	
			</div>
		)
	}
}

export default Presentation;
