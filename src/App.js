import React, { Component } from 'react';

import StartModal from './containers/StartModal';
import LoginModal from './containers/LoginModal';
import SinginModal from './containers/SignInModal';
import MainModal from './containers/MainModal';
import MainHeaderModal from './containers/MainHeaderModal';
import Sat from './containers/Sat';


import './App.css';

class App extends Component {

  state = {
    StartModal: true,
    LoginModal: false,
    SignInModal: false,
    MainModal: false,
    MainHeaderModal: false
  };
  showModalRegistration = (element, element2) => {
    this.setState({
      [element]: true,
      [element2]: false
    })

  };

  hideModal = (element, element2) => {
    this.setState({
      [element]: false,
      [element2]: false,

    })
  };
  showModal = (element, element2) => {
    this.setState({
      [element]: true,
      [element2]: true
    })

  };




  render() {
    return (
      <div className="App">
        <header className="App-header">
          <StartModal show={this.state.StartModal}
            showModalRegistration={this.showModalRegistration} />
          <MainHeaderModal show={this.state.MainHeaderModal}>
            <Sat />
          </MainHeaderModal>
        </header>
        <LoginModal show={this.state.LoginModal}
          hideModal={this.hideModal}
          showModal={this.showModal} />
        <SinginModal show={this.state.SignInModal} hideModal={this.hideModal} />
        <MainModal show={this.state.MainModal} showModal={this.showModal} />
      </div>
    );
  }
}

export default App;
