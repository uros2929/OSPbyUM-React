import React, { Component } from 'react';

import StartModal from './components/StartModal';
import LoginModal from './components/LoginModal';
import SinginModal from './components/SignInModal';
import MainModal from './components/MainModal';
import MainHeaderModal from './components/MainHeaderModal';
import Sat from './components/Sat';


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
