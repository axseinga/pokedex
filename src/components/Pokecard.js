import React from "react";
import ReactDOM from "react-dom";
import "../css/Pokecard.css";
const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
//    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

class Pokecard extends React.Component {
    render() {
        let id = this.props.id.toString().padStart(3, "0");
        let imgSrc = `${POKE_API}${id}.png`;
        return (
            <div className="Pokecard">
                <h1 className="Pokecard-title">{this.props.name}</h1>
                <div className="Pokecard-img">
                    <img src={imgSrc} alt={this.props.name} />
                </div>
                <div className="Pokecard-type">Type: {this.props.type}</div>
                <div className="Pokecard-exp">
                    Exp: {this.props.base_experience}
                </div>
            </div>
        );
    }
}

export default Pokecard;
