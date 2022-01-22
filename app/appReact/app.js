import React, { Component }  from  'react';
import Pie from './footer/pie.js';
import ContentHome from './body/home/contentHome.js';
import Register from './body/register/register.js';
import Login from './body/login/login.js';
import Profile from './body/profile/profile.js';
import {BrowserRouter, Route} from 'react-router-dom';
import './est.css';

class App extends Component{
	constructor(){
		super();
		this.state = {
			imagen1: ''	
		};

	}	

	render(){
		return(
			<div>
				<BrowserRouter>
					<div>
						<Route path='/' component={ContentHome} exact/>
						<Route path='/register' component={Register} exact/>
						<Route path='/login' component={Login} exact/>
						<Route path='/profile' component={Profile} exact/>
						<Route component={Pie} />
					</div>
				</BrowserRouter>
			</div>
		)
	}
}

export default App;
