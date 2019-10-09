import React, {Component} from 'react';
import NavBar from '../NavBar/NavBar';
import search from '../../utils/pokeApi'
import axios from 'axios';

class SearchPokemon extends Component {
    constructor() {
        super();
            this.state={
                searchTerm: '',
                searchResult: '',
                pokemon: []
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
                    searchResult: ''
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
        const { abilities,base_experience,height,name } = this.state.pokemon;
        console.log(abilities)
        console.log(base_experience)
        console.log(height)
        console.log(name)
        console.log(this.state.pokemon);
        console.log(this.state.searchResult);
        return(
            <div>SearchPokemon
                <NavBar 
                user={this.props.user}
                />
                TeamName: {teamName}<br />
                Region: {region}

                <h3>Enter Name</h3>
                <input onChange={this.handleChange} name='searchResult' type='text' />
                <button onClick={this.handleSearch}>Search</button>
                <p>{base_experience}</p>
                <p>{name}</p>
            </div>
        )
    }
};



export default SearchPokemon;