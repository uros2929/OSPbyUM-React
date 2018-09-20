import React,{Component} from 'react';

import "../css/digitron.css"

class Digitron extends Component{

render(){
    return(
        <div className="digitronModal" style={{ display: this.props.show ? "block" : "none" }}>
        {this.props.children}
        Digitron
        </div>
    )
}
  
}

export default Digitron;