import React, { Component } from 'react';

import Kalendar from './Kalendar';
import Rokovnik from './Rokovnik';
import Digitron from './Digitron';
import GlavnaKnjiga from './GlavnaKnjiga';
import Nabavka from './Nabavka';
import AnalitikaRacuna from './AnalitikaRacuna';
import Dokumenta from './Dokumenta';
import KreiranjeDokumenata from './KreiranjeDokumenata';
import KnjizenjeRobe from './KnjizenjeRobe';
import Kontakt from './Kontakt';



import "../css/mainModal.css";

class MainModal extends Component {
    constructor() {
        super();
        this.state = {
          Kalendar: false,
          Rokovnik:false,
          Digitron:false,
          GlavnaKnjiga:false,
          Nabavka:false,
          AnalitikaRacuna:false,
          Dokumenta:false,
          KreiranjeDokumenata:false,
          KnjizenjeRobe:false,
          Kontakt:false
        }
      }
      showModal = (element, element2) => {
        this.setState({
          [element]: true,
          [element2]: true
        })
    
      };
      hideModal = (element, element2) => {
        this.setState({
          [element]: false,
          [element2]: false,
    
        })
      };

    render() {
        return (
            <div className="mainModal" style={{ display: this.props.show ? "block" : "none" }}>
                <div className="navigacioniDugmici">
                    <button  onClick={event => { event.preventDefault(); this.showModal("Kalendar")}}>Kalendar</button>
                    <button onClick={event => { event.preventDefault(); this.showModal("Rokovnik")}}>Rokovnik</button>
                    <button onClick={event => { event.preventDefault(); this.showModal("Digitron")}} >Digitron</button>
                    <button onClick={event => { event.preventDefault(); this.showModal("GlavnaKnjiga")}}>Glavna knjiga</button>
                    <button onClick={event => { event.preventDefault(); this.showModal("Nabavka")}}>Nabavka</button>
                    <button onClick={event => { event.preventDefault(); this.showModal("AnalitikaRacuna")}}>Analitika računa </button>
                    <button onClick={event => { event.preventDefault(); this.showModal("Dokumenta")}}>Dokumenta</button>
                    <button onClick={event => { event.preventDefault(); this.showModal("KreiranjeDokumenata")}}>Kreiranje dokumenata</button>
                    <button onClick={event => { event.preventDefault(); this.showModal("KnjizenjeRobe")}}>Knjiženje robe</button>
                    <button onClick={event => { event.preventDefault(); this.showModal("Kontakt")}}>Kontakt</button>
                </div>
                <div className="prikazModala">
                <Kalendar  show={this.state.Kalendar}>
                <button  onClick={event => { event.preventDefault(); this.hideModal("Kalendar")}}>X</button>
                </Kalendar>
                <Rokovnik show={this.state.Rokovnik}>
                <button  onClick={event => { event.preventDefault(); this.hideModal("Rokovnik")}}>X</button>
                </Rokovnik>
                <Digitron show={this.state.Digitron}>
                <button  onClick={event => { event.preventDefault(); this.hideModal("Digitron")}}>X</button>
                </Digitron>
                <GlavnaKnjiga show={this.state.GlavnaKnjiga}>
                <button  onClick={event => { event.preventDefault(); this.hideModal("GlavnaKnjiga")}}>X</button>
                </GlavnaKnjiga>
                <Nabavka show={this.state.Nabavka}>
                <button  onClick={event => { event.preventDefault(); this.hideModal("Nabavka")}}>X</button>
                </Nabavka>
                <AnalitikaRacuna show={this.state.AnalitikaRacuna}>
                <button  onClick={event => { event.preventDefault(); this.hideModal("AnalitikaRacuna")}}>X</button>
                </AnalitikaRacuna>
                <Dokumenta show={this.state.Dokumenta}>
                <button  onClick={event => { event.preventDefault(); this.hideModal("Dokumenta")}}>X</button>
                </Dokumenta>
                <KreiranjeDokumenata show={this.state.KreiranjeDokumenata}>
                <button  onClick={event => { event.preventDefault(); this.hideModal("KreiranjeDokumenata")}}>X</button>
                </KreiranjeDokumenata>
                <KnjizenjeRobe show={this.state.KnjizenjeRobe}>
                <button  onClick={event => { event.preventDefault(); this.hideModal("KnjizenjeRobe")}}>X</button>
                </KnjizenjeRobe>
                <Kontakt show={this.state.Kontakt}>
                <button  onClick={event => { event.preventDefault(); this.hideModal("Kontakt")}}>X</button>
                </Kontakt>
                </div>
            </div>
        )
    }
}

export default MainModal;