import React, { Component } from 'react';

import "../css/startModal.css";

class StartModal extends Component {

  render() {
    return (
      <div className="startModal" style={{ display: this.props.show ? "block" : "none" }}>
       <h1><span>OSP</span>byUM</h1>
        <button onClick={event => { event.preventDefault(); this.props.showModalRegistration('LoginModal','SignInModal') }}>Prijavi se</button>
        <button onClick={event => { event.preventDefault(); this.props.showModalRegistration('SignInModal','LoginModal') }}>Registruj se</button>
      </div>
    )
  }
}

export default StartModal;