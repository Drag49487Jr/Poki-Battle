import React, {Component} from 'react';

class PokemonCard extends Component {

    render() {
        return(
            <div>
                    {this.props.name}<br/>
                    {/* {this.props.abilities}<br/> */}
                    {this.props.weight}<br/>
                    {/* {this.props.moves} */}
                    {/* {this.props.types} */}
                    {/* {this.props.sprites} */}
                    {/* {this.props.stats} */}
                    {this.props.base_experience}
                    <button>Add</button>
            </div>
        )
    }
};

export default PokemonCard;