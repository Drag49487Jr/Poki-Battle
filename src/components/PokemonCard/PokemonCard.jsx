import React,{Component} from 'react';

class PokemonCard extends Component {
    
    handleRemovePokemon = () => {
        return null;
    }



    render() {
            return(
                <div>
                        {this.props.pokemonName ? <button onClick={this.handleRemovePokemon}>X</button>: null}
                        {this.props.pokemonName ? <p>Name: {this.props.name}</p> : null}
                        {this.props.abilities ? <p>{this.props.abilities}</p> : null}
                        {this.props.weight ? <p>Weight: {this.props.weight}</p> : null}
                        {this.props.types ? <p>{this.props.types}</p> : null}
                        {this.props.stats ? <p>{this.props.stats}</p> : null}
                        {this.props.base_experience ? <p>Base Experience: {this.props.base_experience}</p> : null}
                </div>
            )
    }
};

export default PokemonCard;