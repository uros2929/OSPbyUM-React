import React,{Component} from 'react';


class UgasiCitate extends Component{

render(){
    return(
        <div style={{ display: this.props.show ? "block" : "none" }}>CITATI</div>
    )
}
  
}

export default UgasiCitate;