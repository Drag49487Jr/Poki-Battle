import React,{Component} from 'react';
import './PokemonCard.css';

class PokemonCard extends Component {
    
    handleRemovePokemon = () => {
        return null;
    }



    render() {
            return(
                <div className='card bg-light'>
                        {this.props.pokemonName ? <button onClick={this.handleRemovePokemon}>X</button>: null}
                        {this.props.sprites ? <img className='card-img-top' src={this.props.sprites} /> : null}
                    <div className='card-body'>
                        <p className='card-text'>
                            {this.props.pokemonName ? <p>Name: {this.props.pokemonName.toUpperCase()}</p> : null}
                            {this.props.abilities ? <p>{this.props.abilities}</p> : null}
                            {this.props.weight ? <p>Weight: {this.props.weight}</p> : null}
                            {this.props.types ? <p>{this.props.types}</p> : null}
                            {this.props.stats ? <p>{this.props.stats}</p> : null}
                            {this.props.base_experience ? <p>Base Experience: {this.props.base_experience}</p> : null}
                        </p>
                    </div>
                </div>
            )
    }
};

export default PokemonCard;