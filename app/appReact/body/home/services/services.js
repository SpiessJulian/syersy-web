import React, { Component }  from  'react';
import './services.css';
import "../layoutLg.css";


class Services extends Component{
	constructor(){
		super();
		this.state = {
			
		};
	}

	render(){
		return(
			<div id="servicios" className="ServiceMainContainer services">
				<div className="firstDiv">
						<h1 className="serviceTitle">Services</h1><br/>
						<h2 className="serviceP">
							We develop powerful websites, management systems and Android apps.<br />
						</h2>
				</div>
				<div id="carouselExampleFade" className="carousel slide carouselPosition esquinas" data-ride="carousel">
					<div className="carousel-inner esquinas">
						<div className="carousel-item active esquinas" data-interval="5000">
							<img src="./images/aeroclubChaco.png" className="anchoCarousel" alt="..."/>
						</div>
						<div className="carousel-item esquinas" data-interval="5000">
							<img src="./images/sams.png" className="anchoCarousel" alt="..."/>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Services;
