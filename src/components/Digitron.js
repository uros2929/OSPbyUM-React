import React, { Component } from 'react';

import "../css/digitron.css"


class Digitron extends Component {

    prikazIskucanihBrojeva = (event) => {
        let prikazIskucanihBrojeva = document.getElementById('prikazIskucanihBrojeva');
        prikazIskucanihBrojeva.value += event.target.value
        console.log(event.target.value)
    }

    izbrisiIskucaneBrojeve = () => {
        let prikazIskucanihBrojeva = document.getElementById('prikazIskucanihBrojeva');
        prikazIskucanihBrojeva.value = "";
    }
    racunanjeIskucanogIzraza = () => {
        let prikazIskucanihBrojeva = document.getElementById('prikazIskucanihBrojeva'),
            novRezultat = "n/a";
        try {
            novRezultat = eval(prikazIskucanihBrojeva.value)

        } catch (error) {
            alert(error)            
        }
        if (novRezultat !== "n/a") {
            prikazIskucanihBrojeva.value = novRezultat;
        }
    }
    render() {
        return (
            <div className="digitronModal" style={{ display: this.props.show ? "block" : "none" }}>
                {this.props.children}
                <input type="text" id='prikazIskucanihBrojeva'></input>

                <div className="digitronDugmici">
                    <button id="otvorenaZagrada" value="(" onClick={event => { event.preventDefault(); this.prikazIskucanihBrojeva(event) }}>(</button>
                    <button id="zatvorenaZagrada" value=")" onClick={event => { event.preventDefault(); this.prikazIskucanihBrojeva(event) }}>)</button>
                    <button id="reset" onClick={event => { event.preventDefault(); this.izbrisiIskucaneBrojeve() }}>C</button>
                    <button id="resetCC" onClick={event => { event.preventDefault(); this.izbrisiIskucaneBrojeve() }}>CC</button>
                    <button id="brojSedam" value="7" onClick={event => { event.preventDefault(); this.prikazIskucanihBrojeva(event) }}>7</button>
                    <button id="brojOsam" value="8" onClick={event => { event.preventDefault(); this.prikazIskucanihBrojeva(event) }}>8</button>
                    <button id="brojDevet" value="9" onClick={event => { event.preventDefault(); this.prikazIskucanihBrojeva(event) }}>9</button>
                    <button id="operacijaSabiranje" value="+" onClick={event => { event.preventDefault(); this.prikazIskucanihBrojeva(event) }}>+</button>
                    <button id="brojCetiri" value="4" onClick={event => { event.preventDefault(); this.prikazIskucanihBrojeva(event) }}>4</button>
                    <button id="brojPet" value="5" onClick={event => { event.preventDefault(); this.prikazIskucanihBrojeva(event) }}>5</button>
                    <button id="brojSest" value="6" onClick={event => { event.preventDefault(); this.prikazIskucanihBrojeva(event) }}>6</button>
                    <button id="operacijaOduzimanje" value="-" onClick={event => { event.preventDefault(); this.prikazIskucanihBrojeva(event) }}>-</button>
                    <button id="brojJedan" value="1" onClick={event => { event.preventDefault(); this.prikazIskucanihBrojeva(event) }}>1</button>
                    <button id="brojDva" value="2" onClick={event => { event.preventDefault(); this.prikazIskucanihBrojeva(event) }}>2</button>
                    <button id="brojTri" value="3" onClick={event => { event.preventDefault(); this.prikazIskucanihBrojeva(event) }}>3</button>
                    <button id="operacijaMnozenje" value="*" onClick={event => { event.preventDefault(); this.prikazIskucanihBrojeva(event) }}>X</button>
                    <button id="brojNula" value="0" onClick={event => { event.preventDefault(); this.prikazIskucanihBrojeva(event) }}>0</button>
                    <button id="brojTacka" value="." onClick={event => { event.preventDefault(); this.prikazIskucanihBrojeva(event) }}>.</button>
                    <button id="jednako" onClick={event => { event.preventDefault(); this.racunanjeIskucanogIzraza() }}>=</button>
                    <button id="operacijaDeljenje" value="/" onClick={event => { event.preventDefault(); this.prikazIskucanihBrojeva(event) }}>/</button>
                </div>
            </div>
        )
    }

}

export default Digitron;