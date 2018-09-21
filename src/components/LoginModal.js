import React, { Component } from 'react';

import "../css/logIn.css"

class LoginModal extends Component {
  submit(event) {
    event.preventDefault();
    let emailLog = this.refs.emailLog.value,
      passLog = this.refs.passLog.value,
      korisnici = localStorage.getItem("Korisnici") !== null ? JSON.parse(localStorage.getItem("Korisnici")) : {};
    if (korisnici === {} || typeof korisnici[emailLog] === "undefined") {
      alert("Nepostojeci korisnik")
      return;
    }
    if (korisnici[emailLog].password !== passLog) {
      alert("Pogrešili ste šifru")
      return;
    } else {
      localStorage.setItem("Ulogovani korisnik", emailLog);
      this.props.hideModal('LoginModal', 'StartModal');
      this.props.showModal('MainModal', 'MainHeaderModal');
    }


  }
  render() {
    return (
      <div className="modalLogIn" style={{ display: this.props.show ? "block" : "none" }}>
        <form action="?" method="POST" id="formaLogIn" onSubmit={this.submit.bind(this)}>
          <br />
          <label htmlFor="emailLog" ><strong>email</strong></label>
          <br />
          <input type="email" ref="emailLog" id="emailLog" placeholder="email" required />
          <br />  <br />
          <label htmlFor="passLog" ><strong>password</strong></label>
          <br />
          <input type="password" ref="passLog" id="passLog" placeholder="password" required />
          <br />
          <br />
          <input type="submit" value="Prijavi se" id="dugmePrijaviSe" />
        </form>
      </div>
    )
  }


}


export default LoginModal;
