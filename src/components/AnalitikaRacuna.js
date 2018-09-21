import React,{Component} from 'react';

import "../css/analitikaRacuna.css"

class AnalitikaRacuna extends Component{

render(){
    return(
        <div className="analitikaRacunaModal" style={{ display: this.props.show ? "block" : "none" }}>
         {this.props.children}
        AnalitikaRacuna
        </div>
    )
}
  
}

export default AnalitikaRacuna;