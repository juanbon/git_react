import React, { Component } from 'react';
// import logo from './logo.svg';
import Horas from './Horas.js';
import Boton from './Boton.js';
import './App.css';
import Merge from './Merge.js';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nombre: '',
			desdeelstate : 0,
			meses : ['enero','febrero','marzo']

		};
	}


	vertime = (g) =>{

		var d = new Date();
// 		d.getTime();

		this.setState({

			desdeelstate : d.getTime()

		});

	};

	actualizarNombre = (a) => {

			this.setState({
				nombre: a.target.value
			//	desdeelstate:0
			});

		//		console.log(a.);
	};

	render() {
		const s = <div>ewwww444ww</div>;

		const op = [1, 2, 3, 4, 5, 6, 7, 8, 9];

		const g = 'tiene';

		return (
			<div className="erda">

			<li>

			{this.state.meses.map(mes=>
			
			<ul>{mes}</ul>

			)}


			</li>

<span>Agregar mes</span>


{/*

				<div className="lala">sssssssssssss</div>

				<span>ingrese nombre </span>
				{s}
				<input
					value={this.state.nombre}
					onChange={this.actualizarNombre}
					type="text"
				/>

				<Horas lala="789" data="[test]" />
				<Merge />
				<Boton pala="argvsbrasil" />

				{op.map((e) => {
					return (
						<div>
							<Boton pala={'pasdo' + e + 'nuevo'} /> {e}
							{g ? ' put' : ' echo'}
						</div>
					);
				})}

				<Boton pala={this.state.nombre} />

				<div>222222222</div>
				<input type="button" value="cambiar" onClick={this.vertime} />
				<span>Desde estado</span>
				<input type="text" value={this.state.desdeelstate} />

			*/}



			</div>
		);
	}
}

export default App;
