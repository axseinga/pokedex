import React from "react";
import ReactDOM from "react-dom";
import "../css/Pokecard.css";
const POKE_API =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

class Pokecard extends React.Component {
    render() {
        let imgSrc = `${POKE_API}${this.props.id}.png`;
        return (
            <div className="Pokecard">
                <h1 className="Pokecard-title">{this.props.name}</h1>
                <img
                    src={imgSrc}
                    alt={this.props.name}
                    className="Pokecard-img"
                />
                <div className="Pokecard-type">Type: {this.props.type}</div>
                <div className="Pokecard-exp">
                    Exp: {this.props.base_experience}
                </div>
            </div>
        );
    }
}

export default Pokecard;
