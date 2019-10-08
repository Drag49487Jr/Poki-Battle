import React, {Component} from 'react';
import NavBar from '../NavBar/NavBar';
import axios from 'axios';

class SearchPokemon extends Component {
    constructor() {
        super();
        this.state={
            abilities:[]
        }
    }

    async componentDidMount() {
        axios.get(this.props.searchResult.url)
        .then(res => 
            {this.setState({abilities: res.data})
            const abilities = this.props.searchResult.url
            console.log(abilities)
        });
    }

    render() {            
            const {region,teamName} = this.props.history.location.state;
        return(
            <div>SearchPokemon
                <NavBar 
                user={this.props.user}
                />
                {teamName}<br />
                {region}
                <h3>Enter Name</h3>
                <form onSubmit={this.props.handleSearch}>
                    <input onChange={this.props.handleChange} name="searchTerm" type="text"/>
                    <button type="submit">Search</button>
                </form>
                {
                    !this.props.message && this.props.searchResult.name ? 
                    <p>{this.props.searchResult.name} {this.props.searchResult.url} {console.log(this.state.abilities)}</p>
                    : <p>{this.props.message} </p>
                }
            </div>
        )
    }
};

export default SearchPokemon;