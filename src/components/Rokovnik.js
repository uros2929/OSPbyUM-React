import React, { Component } from 'react';


import "../css/rokovnik.css"


class Rokovnik extends Component {
    constructor(props) {
        super(props);
        this.state = {
            novaStavka: "",
            rokovnikStavke: []
        };
    }

    updateInput(key, value) {
        this.setState({ [key]: value });
        localStorage.setItem(key, value)
    }

    dodajStavku() {
        if (this.state.novaStavka==="") {
            alert('Upisite novu stavku!')
            return;
        } 
        const novaStavka = {
            id:1+Math.random()+this.state.novaStavka.slice(),
            value: this.state.novaStavka.slice()
        };
      
        const rokovnikStavke = [...this.state.rokovnikStavke];    
        rokovnikStavke.push(novaStavka);
        this.setState({
            rokovnikStavke,
            novaStavka: ""
        })
       localStorage.setItem("rokovnikStavke", JSON.stringify(rokovnikStavke));
       localStorage.setItem("novaStavka", "")
    }
    izbrisiStavku(id) {
        const rokovnikStavke = [...this.state.rokovnikStavke];
        const updateRokovnikStavke = rokovnikStavke.filter(stavka => stavka.id !== id);
        // console.log(updateRokovnikStavke)
        this.setState({
            rokovnikStavke: updateRokovnikStavke
        })
        localStorage.setItem("rokovnikStavke", JSON.stringify(updateRokovnikStavke))


    }

    hydrateStateWithLocalStorage() {
        for (let key in this.state) {
            if (localStorage.hasOwnProperty(key)) {
                let value = localStorage.getItem(key);
                try {
                    value = JSON.parse(value);
                    this.setState({ [key]: value });
                } catch (e) {
                    this.setState({ [key]: value });
                }
            }
        }
    }
    componentDidMount() {
        this.hydrateStateWithLocalStorage();
    }

    render() {
        return (
            <div className="RokovnikModal" style={{ display: this.props.show ? "block" : "none" }}>
                {this.props.children}
                <br />
                <input type="text"
                    value={this.state.novaStavka}
                    placeholder="Upisi stavku!"
                    onChange={e => this.updateInput("novaStavka", e.target.value)} />
                <button id="dugmeDodajStavku" onClick={() => this.dodajStavku()}>Dodaj stavku</button><br /><br />
                <ul>
                    {this.state.rokovnikStavke.map(stavka => {
                        return (
                            <li key={stavka.id}>
                                {stavka.value}
                                <em onClick={() => this.izbrisiStavku(stavka.id)}>Izbrisi</em>
                            </li>
                        );
                    })}
                </ul>

            </div>
        )
    }

}

export default Rokovnik;