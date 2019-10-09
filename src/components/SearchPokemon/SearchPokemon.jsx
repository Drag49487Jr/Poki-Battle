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
        const abilityList = this.state.abilities.map((ability) => (
            'Ability: ' + 
            ability.ability.name[0].toUpperCase() + 
            ability.ability.name.substring(1) + '|'
        ))

        const typeList = this.state.types.map((type) => (
            'Type: ' + 
            type.type.name[0].toUpperCase() + 
            type.type.name.substring(1) + '|'
        ))

        const statsList = this.state.stats.map((stat) => (
            'Stats: ' + 
            stat.stat.name[0].toUpperCase() + 
            stat.stat.name.substring(1) +':'+ 
            stat.base_stat +'|'
        ))

        return(
            <div>
                <NavBar 
                    user={this.props.user}
                />
                    TeamName: {teamName}<br />
                    Region: {region}
                <h3>Enter Name</h3>
                <input onChange={this.handleChange} name='searchResult' type='text' /><br/>
                <button onClick={this.handleSearch}>Search</button><br/>
                <PokemonCard 
                    name={this.state.name}
                    height={this.state.height}
                    weight={this.state.weight}
                    abilities={abilityList}
                    types={typeList}
                    sprites={this.state.sprites}
                    stats={statsList}
                    base_experience={this.state.base_experience}
                    />
            </div>
        )
    }
};



export default SearchPokemon;