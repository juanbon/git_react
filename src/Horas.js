import React from 'react';
import Boton from './Boton.js';
/*

const Horas = ()=><div>aaaaaa  jhorasss </div>;
React.Component

*/

class Horas extends React.Component {

    
    constructor(props) {
        super(props);

        this.state ={
            hora : "12:56"
        }

    }

    

    render(){

        return <div><Boton pala="123456"/>componente puro {this.props.lala}{this.props.data} {this.state.hora}</div>;
    }

}

export default Horas;