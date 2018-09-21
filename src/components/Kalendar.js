import React, { Component } from 'react';

import "../css/kalendar.css"

class Kalendar extends Component {

    render() {
   
        return (
            <div className="KalendarModal" style={{ display: this.props.show ? "block" : "none" }}>
            {this.props.children}
               KALENDAR
        </div>
        )
    }

}

export default Kalendar;