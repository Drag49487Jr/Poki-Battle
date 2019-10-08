import React, {Component} from 'react';
import NavBar from '../NavBar/NavBar';
import axios from 'axios';

class SearchPokemon extends Component {
    constructor() {
        super();
        this.state={
            abilities:[],
        }
    }
    
    async componentDidMount() {
        axios.get(`${this.props.searchResult.url}`).then(res => this.setState({abilities: res.data.abilities}))
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
                <form onSubmit={this.props.handleSearch}>
                    <input onChange={this.props.handleChange} name="searchTerm" type="text"/>
                    <button type="submit">Search</button>
                </form>
                {
                    !this.props.message && this.props.searchResult.name ? 
                    <p>{this.props.searchResult.name} {axios.get(this.props.searchResult.url).then(res => console.log(res.data))}</p>
                    : <p>{this.props.message} </p>
                }
            </div>
        )
    }
};

export default SearchPokemon;