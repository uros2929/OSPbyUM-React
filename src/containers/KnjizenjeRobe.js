import React,{Component} from 'react';

import "../css/knjizenjeRobe.css"

class KnjizenjeRobe extends Component{

render(){
    return(
        <div className="knjizenjeRobeModal" style={{ display: this.props.show ? "block" : "none" }}>
         {this.props.children}
        KnjizenjeRobe
        </div>
    )
}
  
}

export default KnjizenjeRobe;