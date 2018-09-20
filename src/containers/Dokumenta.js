import React,{Component} from 'react';

import "../css/dokumenta.css"

class Dokumenta extends Component{

render(){
    return(
        <div className="dokumentaModal" style={{ display: this.props.show ? "block" : "none" }}>
         {this.props.children}
        Dokumenta
        </div>
    )
}
  
}

export default Dokumenta;