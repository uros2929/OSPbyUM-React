import React,{Component} from 'react';

import"../css/kontakt.css"

class Kontakt extends Component{

render(){
    return(
        <div className="kontaktModal" style={{ display: this.props.show ? "block" : "none" }}>
         {this.props.children}
        Kontakt
        </div>
    )
}
  
}

export default Kontakt;