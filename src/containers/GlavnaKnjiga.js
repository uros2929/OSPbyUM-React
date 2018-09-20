import React,{Component} from 'react';

import "../css/glavnaKnjiga.css"

class GlavnaKnjiga extends Component{

render(){
    return(
        <div className="glavnaKnjigaModal" style={{ display: this.props.show ? "block" : "none" }}>
         {this.props.children}
        GlavnaKnjiga
        </div>
    )
}
  
}

export default GlavnaKnjiga;