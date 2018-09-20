import React,{Component} from 'react';

import "../css/nabavka.css"

class Nabavka extends Component{

render(){
    return(
        <div className="nabavkaModal" style={{ display: this.props.show ? "block" : "none" }}>
         {this.props.children}
        Nabavka
        </div>
    )
}
  
}

export default Nabavka;