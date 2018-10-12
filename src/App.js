import React, { Component } from 'react';
// import logo from './logo.svg';
import Horas from './Horas.js'								
import './App.css';
import Merge from './Merge.js';



class App extends Component {
	
	 
	 render() {

		const s = <div>ewwww444ww</div>;

		const op = [1,2,3,4,5,6,7,8,9];

		const g = "tiene";

		 return (<div className="erda"><div className="lala" >sssssssssssss</div>
		
		<span>ingrese nombre </span>{s}<input type="text" ></input>
		<Horas lala="789" data="[test]" />
		<Merge />

		{op.map((e) => {

		return 	<div >{e}{g?" put":" echo"}</div>
		}

		 )}
		
		<div>222222222</div></div>);
	}
}

export default App;

