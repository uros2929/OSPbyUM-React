import React, { Component } from 'react';


class Sat extends Component {
  constructor(props){
    super(props);
    this.state = {
      sat:new Date(),
      datum:new Date()

    }
  }
  trenutnoVreme(){
    this.setState({
      sat:new Date()
    })
  }
  componentWillMount(){
    setInterval(()=>this.trenutnoVreme(),1000)
  }
  render() {
    return (
      <div className="sat">
        {this.state.sat.toLocaleTimeString()} <br/>
        {this.state.datum.toDateString()}
      </div>
    )
  }
}

export default Sat;