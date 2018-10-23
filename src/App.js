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
			itemeditar: 0,
			itemeliminar: 0,
			nombre: '',
			desdeelstate: 0,
			meses: ['enero', 'febrero', 'marzo'],
			bla: '',
			campo: '',
			mensaje: 'Agregar mes: '
		};
	}

	savemonth = () =>{

		let edit = this.state.itemeditar;
		console.log(this.state.bla);

		this.setState({
			meses: this.state.meses.map((a,b) => edit==b ?this.state.bla:a ),
			bla: '',
			mensaje: 'Agregar mes: '
		});



	};


	canceleditmonth = () => {
		this.setState({
			mensaje: 'Agregar mes: ',
			bla: ''
		});
	};

	editMonth = (gh) => {
		gh.persist();
		console.log(gh.target.getAttribute('data-jj'));

		let ik = gh.target.getAttribute('data-jj');

		let da = this.state.meses;

		this.setState({
			mensaje: 'Editar mes: ',
			bla: da[ik],
			itemeditar:ik
		});

		//console.log(gh);
	};

	vertime = (g) => {
		var d = new Date();
		// 		d.getTime();

		this.setState({
			desdeelstate: d.getTime()
		});
	};

	deletemonth = (a) =>{

		a.persist();
		console.log(a.target.getAttribute('data-eliminar'));
		let ik = a.target.getAttribute('data-eliminar');
		this.setState({
			meses: this.state.meses.filter((t,e) => e!=ik),
			bla:''
		});


	}

	pushmonth = (a) => {

		if(this.state.bla.trim()!=""){

			this.setState({
				meses: this.state.meses.concat(this.state.bla),
				bla:''
				//  [...this.state.meses,this.state.bla]

				// var newArray = this.state.meses.slice();
				// newArray.push("new value");
				// this.setState({meses:newArray});
			});

		}else{
			this.setState({
				bla:""
			});
		}

	};

	actualizarNombre = (a) => {
		this.setState({
			nombre: a.target.value
			//	desdeelstate:0
		});

		//		console.log(a.);
	};
	otraFunction(ev) {
		console.log(ev);
	}
	changeBla(e) {
		// e.persist();
		// 		console.log(e)
		this.otraFunction(e);

		this.setState({
			[e.target.name]: e.target.value
		});
	}
	render() {
		const s = <div>ewwww444ww</div>;

		const op = [1, 2, 3, 4, 5, 6, 7, 8, 9];

		const g = 'tiene';

		return (
			<div className="erda">
				<li>
					{this.state.meses.map((mes, o) => (
						//	console.log(this),

						<ul>
							{mes}
							<input
								type="button"
								data-jj={o}
								className="isboton"
								value="Editar"
								onClick={this.editMonth}
							/>
							<input
								type="button"
								data-eliminar={o}
								className="isboton"
								value="Eliminar"
								onClick={this.deletemonth}
							/>
						</ul>
					))}
				</li>

				{/* cada elemente tendra su acciones, que haran por si mismo,  */}

				<span style={{ marginRigth: '16px !important' }}>
					{this.state.mensaje}
				</span>
				<input
					name="bla"
					type="text"
					value={this.state.bla}
					onChange={this.changeBla.bind(this)}
				/>
				<input
					className="estaoculto"
					name="campo"
					type="text"
					value={this.state.campo}
					onChange={this.changeBla.bind(this)}
				/>
				<textarea
					className="estaoculto"
					name="desc"
					id=""
					cols="30"
					rows="10"
					value={this.state.desc}
					onChange={this.changeBla.bind(this)}
				/>

				<div />

				{this.state.mensaje == 'Agregar mes: ' ? (
					<input
						className="salta"
						type="button"
						value="Agregar"
						onClick={this.pushmonth}
					/>
				) : (
					<div>
						<input
							className="salta"
							type="button"
							value="Guardar"
							onClick={this.savemonth}
						/>
						<input
							className="salta"
							type="button"
							value="Cancelar"
							onClick={this.canceleditmonth}
						/>
					</div>
				)}

				{/*

	data-itemeditar={this.state.itemeditar}

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
