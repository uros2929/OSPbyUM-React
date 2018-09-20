import React,{Component} from 'react';

import "../css/rokovnik.css"

class Rokovnik extends Component{

render(){
    return(
        <div className="RokovnikModal" style={{ display: this.props.show ? "block" : "none" }}>
        {this.props.children}
        ROKOVNIK
        </div>
    )
}
  
}

export default Rokovnik;