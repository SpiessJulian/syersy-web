import React, { Component }  from  'react';
import AboutUs from  './aboutUs/aboutUsPage.js';
import Contact from './contact/contactenos.js'
import Services from './services/services.js'
import Team from './team/team.js'
import Presentation from './presentation/presentation.js'
import NavigationMenu from './navigationMenu/navigationMenu.js'
import '../bodystyles.css';
import "./layoutLg.css";


class ContentHome extends Component{
	constructor(){
		super();
		this.state = {
			
		};
	}

	render(){
		return(
			<div className="grid">
				<NavigationMenu />
				<Presentation />
				<AboutUs />
				<Services />
				<Team />
				<Contact />	
			</div>
		)
	}
}

export default ContentHome;
