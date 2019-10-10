import React, {Component} from 'react';
import NavBar from '../NavBar/NavBar';
import axios from 'axios';
import PokemonCard from '../PokemonCard/PokemonCard';
import userService from '../../utils/userService';

class SearchPokemon extends Component {
    constructor(props) {
        super(props);
            this.state={
                // id:'',
                searchTerm: '',
                searchResult: '',
                pokemon: [],
                abilities: [],
                base_experience: '',
                height: '',
                pokemonName: '',
                sprites: [],
                stats: [],
                types: [],
                weight: '',
                teams: '',
                user:''
            }
    }
    
    componentDidMount() {
      // make call to server at ID
        axios.get(`/api/teams/`)
    }

    searchPokemon = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon' + this.state.searchTerm.toLowerCase()).then((res) => res.data)
    }

    handleSearch = e => {
        e.preventDefault();
        try {
            axios.get('https://pokeapi.co/api/v2/pokemon/' + this.state.searchResult)
            .then(res => 
                this.setState({
                    pokemon: res.data,
                    // id: res.data.id,
                    teams:[res.data.name, res.data.height, res.data.base_experience],
                    searchResult: '',
                    abilities: res.data.abilities,
                    pokemonName: res.data.name,
                    base_experience: res.data.base_experience,
                    height: res.data.height,
                    weight: res.data.weight,
                    stats: res.data.stats,
                    types: res.data.types,
                    sprites: res.data.sprites,
                })
            );
        } catch (err) {
            console.log(err);
        }
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    addPokemon = async (e) => {
        e.preventDefault();
        try{
            await userService.addPokemon(
                this.state.user,
                this.state.teams,
                )
            this.props.history.push({
                pathname:'/pokemonsearch/' + this.props.user._id,
            })
        } catch (err) {
            console.log(err)
        }
    }

    render() {            
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
                <h3>Enter Name</h3>
                <input onChange={this.handleChange} name='searchResult' type='text' /><br/>
                <button onClick={this.handleSearch}>Search</button><br/>
                <button onClick={this.addPokemon}>Add</button>
                <PokemonCard 
                    pokemonName={this.state.pokemonName}
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