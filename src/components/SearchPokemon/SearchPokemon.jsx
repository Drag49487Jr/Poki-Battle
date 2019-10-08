import React, {Component} from 'react';
import NavBar from '../NavBar/NavBar';
import axios from 'axios';
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

class SearchPokemon extends Component {
    constructor() {
        super();
            this.state={
                abilities: [],
                stats:[]
            }
    }
    


    async componentDidMount() {
        const data = this.props.searchTerm;
        // event.preventDefault();
        // console.log(this.state.searchTerm);
        await axios.get(`${BASE_URL}${data}`).then(res => this.setState({
            abilities: res.data.abilities,
            stats: res.data.stats
        }));
    }

    render() {            
            const {region,teamName} = this.props.history.location.state;

        return(
            <div>SearchPokemon
                <NavBar 
                user={this.props.user}
                />
                TeamName: {teamName}<br />
                Region: {region}
                <h3>Enter Name</h3>
                <form>
                    <input onChange={this.props.handleChange} name="searchTerm" type="text"/>
                    <button onClick={this.props.handleSearch} type="submit">Search</button>
                </form>
                {
                    !this.props.message && this.props.searchResult.name ? (
                        <p>
                            {this.props.searchResult.name}<br/>
                            {this.props.searchResult.url} <br/>
                            {this.state.abilities[0].ability.name} <br/>
                            {this.state.abilities[1].ability.name}<br/>
                            {this.state.stats[0].stat.name}
                        </p>
                    )
                    : <p>{this.props.message} </p>
                }
            </div>
        )
    }
};

export default SearchPokemon;