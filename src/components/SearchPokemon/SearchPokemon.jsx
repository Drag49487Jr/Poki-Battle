import React, {Component} from 'react';
import NavBar from '../NavBar/NavBar';
import search from '../../utils/pokeApi'
import axios from 'axios';

class SearchPokemon extends Component {
    constructor() {
        super();
            this.state={
                searchTerm: '',
                // searchResult: {},
                // message: "",
                // abilities: [],
                // stats:[]
            }
    }
    
    searchPokemon = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon' + this.state.searchTerm.toLowerCase()).then((res) => console.log(res.data))
    }

    // handleSearch = event => {
    //     event.preventDefault();
    //     const { searchTerm } = this.state
    //     try {
    //         search(searchTerm)
    //         .then(res => res.data)
    //         .then (pokemon => this.setState({ searchResult: pokemon}))
    //     } catch (err) {
    //         console.log(err)
    //     }
    // };
    
    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    // async componentDidMount() {
    //     const data = this.props.searchTerm;
    //     // event.preventDefault();
    //     // console.log(this.state.searchTerm);
    //     await axios.get(`${BASE_URL}${data}`).then(res => this.setState({
    //         abilities: res.data.abilities,
    //         stats: res.data.stats
    //     }));
    // }

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
                    <input onChange={this.handleChange} name="searchTerm" type="text"/>
                    <button onClick={this.handleSearch} name='search' type="submit">Search</button>
                {
                    !this.message && this.searchResult.name ? (
                        <p>
                            {this.searchResult.name}<br/>
                            {this.searchResult.url} <br/>
                        </p>
                    )
                    : <p>{this.props.message} </p>
                }
            </div>
        )
    }
};



export default SearchPokemon;