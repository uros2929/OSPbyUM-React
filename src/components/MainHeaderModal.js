import React, { Component } from 'react';

import "../css/mainModalHeader.css"

class MainHeaderModal extends Component {
    ulogovanogKorisnika() {
        return localStorage.getItem("Ulogovani korisnik");
    }
    ulogovanogKorisnikaImeIPrezime() {
     let obejkatKorisnici=localStorage.getItem("Korisnici"),
        ulogovaniKorisnik=localStorage.getItem("Ulogovani korisnik");
        if (ulogovaniKorisnik==null) {
            return;
        }
        if (obejkatKorisnici==null) {
            return;
        }
    let imeUlogovanog=JSON.parse(obejkatKorisnici)[ulogovaniKorisnik].ime,
        prezimeUlogovanog=JSON.parse(obejkatKorisnici)[ulogovaniKorisnik].prezime;
        return (imeUlogovanog +" "+ prezimeUlogovanog)
     
    }


    render() {
        return (
            <div className="mainModalHeader" style={{ display: this.props.show ? "block" : "none" }}>
                {this.props.children}
                <h1><span>OSP</span>byUM</h1>
                <a href="mailto:">{this.ulogovanogKorisnika()}</a> <br /><br />
               <h3>{this.ulogovanogKorisnikaImeIPrezime()}</h3>
            </div>
        )
    }
}

export default MainHeaderModal;