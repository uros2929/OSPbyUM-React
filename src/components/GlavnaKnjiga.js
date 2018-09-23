import React, { Component } from 'react';

import "../css/glavnaKnjiga.css"

const glavnaKnjiga = localStorage.getItem("Glavna knjiga") !== null ? JSON.parse(localStorage.getItem("Glavna knjiga")) : {};
class GlavnaKnjiga extends Component {

    constructor() {
        super();
        this.state = {
            novaGlavnaKnjiga: {}
        }
    }
    cuvanjeGlavneKnjige() {
        this.setState({
            novaGlavnaKnjiga: {
                textAktiva1: this.refs.textAktiva1.value, brojAktiva1: this.refs.brojAktiva1.value, textAktiva2: this.refs.textAktiva2.value,
                brojAktiva2: this.refs.brojAktiva2.value, textAktiva3: this.refs.textAktiva3.value, brojAktiva3: this.refs.brojAktiva3.value,
                textAktiva4: this.refs.textAktiva4.value, brojAktiva4: this.refs.brojAktiva4.value, textAktiva5: this.refs.textAktiva5.value,
                brojAktiva5: this.refs.brojAktiva5.value, textAktiva6: this.refs.textAktiva6.value, brojAktiva6: this.refs.brojAktiva6.value,
                textAktiva7: this.refs.textAktiva7.value, brojAktiva7: this.refs.brojAktiva7.value, textAktiva8: this.refs.textAktiva8.value,
                brojAktiva8: this.refs.brojAktiva8.value, textAktiva9: this.refs.textAktiva9.value, brojAktiva9: this.refs.brojAktiva9.value,
                textAktiva10: this.refs.textAktiva10.value, brojAktiva10: this.refs.brojAktiva10.value, textPasiva1: this.refs.textPasiva1.value,
                brojPasiva1: this.refs.brojPasiva1.value, textPasiva2: this.refs.textPasiva2.value, brojPasiva2: this.refs.brojPasiva2.value,
                textPasiva3: this.refs.textPasiva3.value, brojPasiva3: this.refs.brojPasiva3.value, textPasiva4: this.refs.textPasiva4.value,
                brojPasiva4: this.refs.brojPasiva4.value, textPasiva5: this.refs.textPasiva5.value, brojPasiva5: this.refs.brojPasiva5.value,
                textPasiva6: this.refs.textPasiva6.value, brojPasiva6: this.refs.brojPasiva6.value, textPasiva7: this.refs.textPasiva7.value,
                brojPasiva7: this.refs.brojPasiva7.value, textPasiva8: this.refs.textPasiva8.value, brojPasiva8: this.refs.brojPasiva8.value,
                textPasiva9: this.refs.textPasiva9.value, brojPasiva9: this.refs.brojPasiva9.value, textPasiva10: this.refs.textPasiva10.value,
                brojPasiva10: this.refs.brojPasiva10.value
            }
        }, function () {
            if (glavnaKnjiga[this.refs.bsp.value] !== undefined) {
                alert('Glavna knjiga za postavljeni datum vec postoji!')
                return;
            }
            glavnaKnjiga[this.refs.bsp.value] = this.state.novaGlavnaKnjiga;
            localStorage.setItem('Glavna knjiga', JSON.stringify(glavnaKnjiga));
            alert("Uspesno sacuvani podatci!")
        }
        )
    }
    ispisivanjeSacuvaneKnjige(event) {
        let izvuceneKnjige = JSON.parse(localStorage.getItem('Glavna knjiga')),
            kljucZaPronalazenjeObjekta = event.target.textContent,
            izvucenoIzLocala = izvuceneKnjige[kljucZaPronalazenjeObjekta]
      //  console.log(izvucenoIzLocala)
        return (
            this.refs.textAktiva1.value = izvucenoIzLocala.textAktiva1, this.refs.brojAktiva1.value = izvucenoIzLocala.brojAktiva1, this.refs.textAktiva2.value = izvucenoIzLocala.textAktiva2,
            this.refs.brojAktiva2.value = izvucenoIzLocala.brojAktiva2, this.refs.textAktiva3.value = izvucenoIzLocala.textAktiva3, this.refs.brojAktiva3.value = izvucenoIzLocala.brojAktiva3,
            this.refs.textAktiva4.value = izvucenoIzLocala.textAktiva4, this.refs.brojAktiva4.value = izvucenoIzLocala.brojAktiva4, this.refs.textAktiva5.value = izvucenoIzLocala.textAktiva5,
            this.refs.brojAktiva5.value = izvucenoIzLocala.brojAktiva5, this.refs.textAktiva6.value = izvucenoIzLocala.textAktiva6, this.refs.brojAktiva6.value = izvucenoIzLocala.brojAktiva6,
            this.refs.textAktiva7.value = izvucenoIzLocala.textAktiva7, this.refs.brojAktiva7.value = izvucenoIzLocala.brojAktiva7, this.refs.textAktiva8.value = izvucenoIzLocala.textAktiva8,
            this.refs.brojAktiva8.value = izvucenoIzLocala.brojAktiva8, this.refs.textAktiva9.value = izvucenoIzLocala.textAktiva9, this.refs.brojAktiva9.value = izvucenoIzLocala.brojAktiva9,
            this.refs.textAktiva10.value = izvucenoIzLocala.textAktiva10, this.refs.brojAktiva10.value = izvucenoIzLocala.brojAktiva10, this.refs.textPasiva1.value = izvucenoIzLocala.textPasiva1,
            this.refs.brojPasiva1.value = izvucenoIzLocala.brojPasiva1, this.refs.textPasiva2.value = izvucenoIzLocala.textPasiva2, this.refs.brojPasiva2.value = izvucenoIzLocala.brojPasiva2,
            this.refs.textPasiva3.value = izvucenoIzLocala.textPasiva3, this.refs.brojPasiva3.value = izvucenoIzLocala.brojPasiva3, this.refs.textPasiva4.value = izvucenoIzLocala.textPasiva4,
            this.refs.brojPasiva4.value = izvucenoIzLocala.brojPasiva4, this.refs.textPasiva5.value = izvucenoIzLocala.textPasiva5, this.refs.brojPasiva5.value = izvucenoIzLocala.brojPasiva5,
            this.refs.textPasiva6.value = izvucenoIzLocala.textPasiva6, this.refs.brojPasiva6.value = izvucenoIzLocala.brojPasiva6, this.refs.textPasiva7.value = izvucenoIzLocala.textPasiva7,
            this.refs.brojPasiva7.value = izvucenoIzLocala.brojPasiva7, this.refs.textPasiva8.value = izvucenoIzLocala.textPasiva8, this.refs.brojPasiva8.value = izvucenoIzLocala.brojPasiva8,
            this.refs.textPasiva9.value = izvucenoIzLocala.textPasiva9, this.refs.brojPasiva9.value = izvucenoIzLocala.brojPasiva9, this.refs.textPasiva10.value = izvucenoIzLocala.textPasiva10,
            this.refs.brojPasiva10.value = izvucenoIzLocala.brojPasiva10
        )
    }

    prikazSacuvanihKnjiga() {
        const izvuceneKnjige = JSON.parse(localStorage.getItem('Glavna knjiga'));
        if (izvuceneKnjige === null) {
            return;
        }
        return (
            <ul>
                {Object.keys(izvuceneKnjige).map(key => {
                    return (
                       
                        <li key={key} onClick={event => { event.preventDefault(); this.ispisivanjeSacuvaneKnjige(event) }}>
                            {key} 
                        </li>
                        
                    )
                })}
            </ul>
        )
    }
    prikazZabrisanje(){
        const izvuceneKnjige = JSON.parse(localStorage.getItem('Glavna knjiga'));
        if (izvuceneKnjige === null) {
            return;
        }
        return (
            <ul>
                {Object.keys(izvuceneKnjige).map(key => {
                    return (
                       
                        <li key={key} >
                            <em key={key} id={key}onClick={event => { event.preventDefault(); this.izbrisiKnjiguZaOdredjeniDatum(event) }}>izbrisi</em>
                        </li>
                    )
                })}
            </ul>
        )
       
    }
    izbrisiKnjiguZaOdredjeniDatum(event){
        let izvuceneKnjige = JSON.parse(localStorage.getItem('Glavna knjiga')),
         kljucZaBrisanje=event.target.id;
        delete izvuceneKnjige[kljucZaBrisanje];
        localStorage.setItem('Glavna knjiga',JSON.stringify(izvuceneKnjige))
        
    }
    resetujForme() {
        this.setValGlavnaKnjiga('1', '2', '3', '4', '5', '6', '7', '8', '9', '10');

    }
    setValGlavnaKnjiga(...input) {
        for (let idBroj of input) {
            document.getElementById('brojAktiva' + idBroj).value = "0";
            document.getElementById('brojPasiva' + idBroj).value = "0";
            document.getElementById('textPasiva' + idBroj).value = "";
            document.getElementById('textAktiva' + idBroj).value = "";
        }
    }
    render() {

        return (
            <div className="glavnaKnjigaModal" style={{ display: this.props.show ? "block" : "none" }}>
                {this.props.children}
                <div className="bilansStanja">BILANS STANJA PREDUZEĆA NA DAN: <input type="date" ref="bsp" id="bsp" /></div><br />
                <div className="aktiva">AKTIVA</div>
                <div className="pasiva">PASIVA</div>
                <div className="mainGlavnaKnjiga">
                    <div className="aktivaMain">
                        <form action="?" method="POST" className="formaAktiva">
                            <input type="text" ref="textAktiva1" id="textAktiva1" placeholder="Upiši naziv" /><input type="number"
                                ref="brojAktiva1" id="brojAktiva1" defaultValue="0" /><br />
                            <input type="text" ref="textAktiva2" id="textAktiva2" placeholder="Upiši naziv" /><input type="number"
                                ref="brojAktiva2" id="brojAktiva2" defaultValue="0" /><br />
                            <input type="text" ref="textAktiva3" id="textAktiva3" placeholder="Upiši naziv" /><input type="number"
                                ref="brojAktiva3" id="brojAktiva3" defaultValue="0" /><br />
                            <input type="text" ref="textAktiva4" id="textAktiva4" placeholder="Upiši naziv" /><input type="number"
                                ref="brojAktiva4" id="brojAktiva4" defaultValue="0" /><br />
                            <input type="text" ref="textAktiva5" id="textAktiva5" placeholder="Upiši naziv" /><input type="number"
                                ref="brojAktiva5" id="brojAktiva5" defaultValue="0" /><br />
                            <input type="text" ref="textAktiva6" id="textAktiva6" placeholder="Upiši naziv" /><input type="number"
                                ref="brojAktiva6" id="brojAktiva6" defaultValue="0" /><br />
                            <input type="text" ref="textAktiva7" id="textAktiva7" placeholder="Upiši naziv" /><input type="number"
                                ref="brojAktiva7" id="brojAktiva7" defaultValue="0" /><br />
                            <input type="text" ref="textAktiva8" id="textAktiva8" placeholder="Upiši naziv" /><input type="number"
                                ref="brojAktiva8" id="brojAktiva8" defaultValue="0" /><br />
                            <input type="text" ref="textAktiva9" id="textAktiva9" placeholder="Upiši naziv" /><input type="number"
                                ref="brojAktiva9" id="brojAktiva9" defaultValue="0" /><br />
                            <input type="text" ref="textAktiva10" id="textAktiva10" placeholder="Upiši naziv" /><input
                                type="number" ref="brojAktiva10" id="brojAktiva10" defaultValue="0" /><br />
                        </form>
                        <div className="rezultatAktivaTekst">Ukupna aktiva <span id="rezultatAktiva"></span></div>
                    </div>
                    <div className="pasivaMain">
                        <form action="?" method="POST" className="formaPasiva">
                            <input type="text" ref="textPasiva1" id="textPasiva1" placeholder="Upiši naziv" /><input type="number"
                                ref="brojPasiva1" id="brojPasiva1" defaultValue="0" /><br />
                            <input type="text" ref="textPasiva2" id="textPasiva2" placeholder="Upiši naziv" /><input type="number"
                                ref="brojPasiva2" id="brojPasiva2" defaultValue="0" /><br />
                            <input type="text" ref="textPasiva3" id="textPasiva3" placeholder="Upiši naziv" /><input type="number"
                                ref="brojPasiva3" id="brojPasiva3" defaultValue="0" /><br />
                            <input type="text" ref="textPasiva4" id="textPasiva4" placeholder="Upiši naziv" /><input type="number"
                                ref="brojPasiva4" id="brojPasiva4" defaultValue="0" /><br />
                            <input type="text" ref="textPasiva5" id="textPasiva5" placeholder="Upiši naziv" /><input type="number"
                                ref="brojPasiva5" id="brojPasiva5" defaultValue="0" /><br />
                            <input type="text" ref="textPasiva6" id="textPasiva6" placeholder="Upiši naziv" /><input type="number"
                                ref="brojPasiva6" id="brojPasiva6" defaultValue="0" /><br />
                            <input type="text" ref="textPasiva7" id="textPasiva7" placeholder="Upiši naziv" /><input type="number"
                                ref="brojPasiva7" id="brojPasiva7" defaultValue="0" /><br />
                            <input type="text" ref="textPasiva8" id="textPasiva8" placeholder="Upiši naziv" /><input type="number"
                                ref="brojPasiva8" id="brojPasiva8" defaultValue="0" /><br />
                            <input type="text" ref="textPasiva9" id="textPasiva9" placeholder="Upiši naziv" /><input type="number"
                                ref="brojPasiva9" id="brojPasiva9" defaultValue="0" /><br />
                            <input type="text" ref="textPasiva10" id="textPasiva10" placeholder="Upiši naziv" /><input
                                type="number" ref="brojPasiva10" id="brojPasiva10" defaultValue="0" /><br />
                        </form>
                        <div className="rezultatPasivaTekst">Ukupna pasiva <span id="rezultatPasiva"></span></div>
                    </div>
                </div>
                <div className="sacuvaniBS">
                {this.prikazSacuvanihKnjiga()}
                <div className="brisanjeBS">{this.prikazZabrisanje()}</div>
                </div>
                
                <div className="dugmiciGKRS">
                    <button className="dugmeResetujGlavnuKnjigu" onClick={event => { event.preventDefault(); this.resetujForme() }}>Resetuj</button>
                    <button className="sacuvajBS" onClick={event => { event.preventDefault(); this.cuvanjeGlavneKnjige() }}>Sačuvaj</button>
                </div>
            </div>
     
        )
    }

}

export default GlavnaKnjiga;