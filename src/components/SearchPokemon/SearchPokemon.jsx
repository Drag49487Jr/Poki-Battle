import React, {Component} from 'react';
import NavBar from '../NavBar/NavBar';
import PokemonCard from '../PokemonCard/PokemonCard';
import axios from 'axios';

class SearchPokemon extends Component {
    constructor() {
        super();
            this.state={
                searchTerm: '',
                searchResult: '',
                pokemon: [],
                abilities: [],
                base_experience: '',
                height: '',
                moves: [],
                name: '',
                sprites: [],
                stats: [],
                types: [],
                weight: ''
            }
    }
    
    searchPokemon = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon' + this.state.searchTerm.toLowerCase()).then((res) => console.log(res.data))
    }

    handleSearch = e => {
        e.preventDefault();
        try {
            axios.get('https://pokeapi.co/api/v2/pokemon/' + this.state.searchResult)
            .then(res => 
                this.setState({
                    pokemon: res.data,
                    searchResult: '',
                    abilities: res.data.abilities,
                    name: res.data.name,
                    base_experience: res.data.base_experience,
                    height: res.data.height,
                    weight: res.data.weight,
                    stats: res.data.stats,
                    types: res.data.types,
                    sprites: res.data.sprites,
                    moves: res.data.moves
                })
            );
            console.log(this.state.searchResult);
        } catch (err) {
            console.log(err);
        }
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {            
        const {region,teamName} = this.props.history.location.state;
        // const { abilities,base_experience,height,name,stats,types,sprites, moves } = this.state.pokemon;
        // console.log(abilities)
        // console.log(base_experience)
        // console.log(height)
        // console.log(name)
        // console.log(stats)
        // console.log(types)
        // console.log(sprites)
        // console.log(moves)
        // console.log(this.state.pokemon);
        // console.log(this.state.searchResult);
        return(
            <div>
                <NavBar 
                    user={this.props.user}
                />
                    TeamName: {teamName}<br />
                    Region: {region}
                <h3>Enter Name</h3>
                <input onChange={this.handleChange} name='searchResult' type='text' /><br/>
                <button onClick={this.handleSearch}>Search</button>
                <PokemonCard 
                    name={this.state.name}
                    abilites={this.state.abilities}
                    height={this.state.height}
                    weight={this.state.weight}
                    moves={this.state.moves}
                    types={this.state.types}
                    sprites={this.state.sprites}
                    stats={this.state.stats}
                    base_experience={this.state.base_experience}
                    // name={name}
                />
            </div>
        )
    }
};



export default SearchPokemon;