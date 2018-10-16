import React from 'react';


export default class Boton extends React.Component{


constructor(props){

    super(props);
}


render(){

    console.log(Date());

    return <span>componente boton {this.props.pala}</span>;

}

}


// export default Boton;