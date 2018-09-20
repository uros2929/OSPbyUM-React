import React,{Component} from 'react';

import "../css/kreiranjeDokumenata.css"

class KreiranjeDokumenata extends Component{

render(){
    return(
        <div className="kreiranjeDokumenataModal" style={{ display: this.props.show ? "block" : "none" }}>
         {this.props.children}
        KreiranjeDokumenata
        </div>
    )
}
  
}

export default KreiranjeDokumenata;