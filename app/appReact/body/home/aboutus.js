import React, { Component }  from  'react';
import '../bodystyles.css';
import "./layoutLg.css";

class AboutUs extends Component{
	constructor(){
		super()
		this.state = {
			
		};
	}

	render(){
		return(
			<div>
				<div>
					<br />
					<div>
						<section id="about">
					      <div className="container">
     						<h1 className="nosotros"> </h1>					        
     						<div className="row about-cols">
					          <div className="col-md-4 wow fadeInUp">
					            <div className="about-col">
					              <div className="img">
					                <img src="../../mision.jpg" alt="" className="img-fluid" />
					                <div className="icon"><i className="fas fa-rocket"></i></div>
					              </div>
					              <h2 className="title"><a href="#">Nuestra Misión</a></h2>
					              <p>
					                Desarrollo de productos de software que satisfagan las necesidades de nuestros 
					                clientes<br/> permitiendo alcanzar sus objetivos organizacionales.


					              </p>
					            </div>
					          </div>

					          <div className="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
					            <div className="about-col">
					              <div className="img">
					                <img src="../../vision.jpg" alt="" className="img-fluid" />
					                <div className="icon"><i className="fas fa-eye"></i></div>
					              </div>
					              <h2 className="title"><a href="#">Nuestra Visión</a></h2>
					              <p>
					                Posicionarnos como uno de los mayores proveedores de software 
					                a nivel  mundial.
					              </p>
					            </div>
					          </div>

					          <div className="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
					            <div className="about-col">
					              <div className="img">
					                <img src="../../values.jpg" alt="" className="img-fluid" />
					                <div className="icon"><i className="fas fa-handshake"></i></div>
					              </div>
					              <h2 className="title"><a href="#">Nuestros Valores</a></h2>
					              <p>
					                Calidad, Transparencia,  Confianza, Eficiencia  y Responsabilidad.
					              </p>
					            </div>
					          </div>

					        </div>

					      </div>
					    </section>
					</div>
				</div>
			</div>
		)
	}
}

export default AboutUs;
