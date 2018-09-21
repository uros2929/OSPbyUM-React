import React, { Component } from 'react';

import "../css/singIn.css"
const korisnici = localStorage.getItem("Korisnici") !== null ? JSON.parse(localStorage.getItem("Korisnici")) : {};

class SinginModal extends Component {
  constructor() {
    super();
    this.state = {
      noviKorisnik: {}
    }
  }

  submit(event) {
    event.preventDefault();
    this.setState({
     
      noviKorisnik: {
        ime: this.refs.imeRegistracija.value,
        prezime: this.refs.prezimeRegistracija.value,
        firma: this.refs.firmaRegistracija.value,
        email: this.refs.emailRegistracija.value,
        password: this.refs.passwordRegistracija.value,
        passwordPotvrda: this.refs.potvrdiPasswordRegistracija.value,
        sifraFirme: this.refs.sifraFirmeRegistarcija.value
      }
    
    }, function () {
      if (this.state.noviKorisnik.password !== this.state.noviKorisnik.passwordPotvrda) {
        alert("Potvrda šifre nije ispravna")
        return;
    }
      if (korisnici[this.state.noviKorisnik.email] !== undefined) {
        alert('Korisnik sa datom email adresom već postoji ! ');
        return;
    }
      korisnici[this.state.noviKorisnik.email]=this.state.noviKorisnik
     localStorage.setItem('Korisnici',JSON.stringify(korisnici));
     alert('Uspesno ste se registovali!');
     this.props.hideModal('SignInModal');
    }
    )


  }
  render() {
    return (
      <div className="modalSingIn" style={{ display: this.props.show ? "block" : "none" }}>
        <form action="?" method="POST" onSubmit={this.submit.bind(this)} >
          <label htmlFor="imeRegistracija"><strong>Ime</strong></label><br />
          <input type="text" ref="imeRegistracija" id="imeRegistracija" placeholder="Ime" required /><br /><br />
          <label htmlFor="prezimeRegistracija"><strong>Prezime</strong></label><br />
          <input type="text" ref="prezimeRegistracija" id="prezimeRegistracija" placeholder="Prezime" required /><br /><br />
          <label htmlFor="firmaRegistracija"><strong>Firma</strong></label><br />
          <input type="text" ref="firmaRegistracija" id="firmaRegistracija" placeholder="Firma" required /><br /><br />
          <label htmlFor="emailRegistracija"><strong>Email</strong></label><br />
          <input type="email" ref="emailRegistracija" id="emailRegistracija" placeholder="email" required /><br /><br />
          <label htmlFor="passwordRegistracija"><strong>Password</strong></label><br />
          <input type="password" ref="passwordRegistracija" id="passwordRegistracija" placeholder="password" required /><br /><br />
          <label htmlFor="potvrdiPasswordRegistracija"><strong>Potvrdi password</strong></label><br />
          <input type="password" ref="potvrdiPasswordRegistracija" id="potvrdiPasswordRegistracija" placeholder="potvrdi password"
            required /><br /><br />
          <label htmlFor="sifraFirmeRegistarcija"><strong>Šifra iz firme</strong></label><br />
          <input type="text" ref="sifraFirmeRegistarcija" id="sifraFirmeRegistarcija" placeholder="Šifra iz firme" required /><br /><br />
          <input type="submit" id="registujSe" value="Registruj se" />
        </form>

      </div>
    );
  }


}

export default SinginModal;