import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
// import PokiApi from './services/PokiApi'
import SearchPokemon from './components/SearchPokemon/SearchPokemon';

class App extends Component {
  constructor() {
    super();
    this.state={
      pokemon:[],
      searchTerm: '',
      searchResult: {},
      message: ""
    }
  }


  // async componentDidMount() {
  //   const {results} = await PokiApi();
  //   console.log(results)
  // }
  async componentDidMount() {
    axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&&limit=964`)
    // .then(res => console.log(res.data));
    .then(res => {
      this.setState({pokemon: res.data.results})
    })
  }
  handleSearch = event => {
    event.preventDefault();
    const result = this.state.pokemon.filter((elem) =>
      elem.name === this.state.searchTerm
    );
    if(result.length > 0) {
      this.setState({
        searchResult: result[0], 
        message: "", 
        searchTerm: ""
      });
    } else {
      this.setState({message: "Sorry Pokemon Not Found"})
    }
  };

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchPokemon
            handleSearch={this.handleSearch}
            handleChange={this.handleChange} 
            pokemon={this.state.pokemon}
            searchResult={this.state.searchResult}
            message={this.state.message}
          />
          {/* <PokiApi /> */}
        </header>
      </div>
    );
  }
}

export default App;
