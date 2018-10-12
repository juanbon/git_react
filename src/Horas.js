import React from 'react';
/*

const Horas = ()=><div>aaaaaa  jhorasss </div>;
React.Component

*/

class Horas extends React.Component {

    
    constructor(props) {
        super(props);
    }

    

    render(){

        return <div>componente puro {this.props.lala}{this.props.data} </div>;
    }

}

export default Horas;