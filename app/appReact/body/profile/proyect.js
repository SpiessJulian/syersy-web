//Imports.
import React, { Component }  from  'react';
import auth from '../../auth';
import axios from 'axios';
import '../bodystyles.css';
import "./proyect.css";


const style = {
		
		
		title:{
			fontFamily: "Arial Black",
			color: "#18d26e",

			
		},
		value:{
			fontFamily: "Arial Black",
			color: "white",
		}

	};


//Definición de la clase.
class Proyect extends Component{

	constructor(){
		//Inicializo el estado y propiedades del componente padre (de la clase "componente").
		super()
		//Inicializo el estado del componente
		this.state = {
			name: '',
			typename: '',
			typedesc: '',
			statusname: '',
			statustype: ''
		};
	}

	//Configuraciónes antes de que se monte el componente.
	componentWillMount(){
		try{
			this.setState({
				name: this.props.pname,
				typename: this.props.ptypename,
				typedesc: this.props.ptypedesc,
				statusname: this.props.pstatusname,
				statustype: this.props.pstatustype
			});
			this.forceUpdate();
		}catch(e){
			console.error(e);
		}
		
		
	}

	componentWillReceiveProps({pname, ptypename, ptypedesc, pstatusname, pstatustype}){
		this.setState({
			name: this.props.pname,
			typename: this.props.ptypename,
			typedesc: this.props.ptypedesc,
			statusname: this.props.pstatusname,
			statustype: this.props.pstatustype
		});
		this.forceUpdate();
	}

	//El método que renderiza el componente.
	render(){
		return(
			<div className="proyectShape">
				<img src="https://syersy.com/Syersy/externalFiles/Imgs/fondo.webp" className="card-img-top imgBorder" alt="photo"></img>
				<div className="card-body">
					<h5 className="card-title">SAMS</h5>
					<div className="wordsLocation">
						<div className="row">
							<a><span style={style.title}>Nombre: </span> <span style={style.value}>{this.state.name}</span> </a>
						</div>
						<div className="row">
							<a><span style={style.title}>Estado:  </span> <span style={style.value}> {this.state.statusname}</span></a>
						</div>
						<div className="row">
							<a><span style={style.title}>Tipo:  </span> <span style={style.value}> {this.state.typename}</span></a>
						</div>
					</div>
					<a href="#" className="btn btn-outline-success btnIngresar">Ingresar</a>
				</div>
   			</div>
			
			)
	}



}

//Exportación del componente.
export default Proyect;