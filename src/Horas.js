import React from 'react';
import Boton from './Boton.js';
/*

const Horas = ()=><div>aaaaaa  jhorasss </div>;
React.Component

*/

class Horas extends React.Component {

    
    constructor(props) {
        super(props);
    }

    

    render(){

        return <div><Boton pala="123456"/>componente puro {this.props.lala}{this.props.data} </div>;
    }

}

export default Horas;