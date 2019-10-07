import React, {Component} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
import userService from '../../utils/userService';
import PokemonBoard from '../../components/PokemonBoard/PokemonBoard';
import SearchPokemon from '../../components/SearchPokemon/SearchPokemon';
import PokemonPage from '../../pages/PokemonPage/PokemonPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import SignupPage from '../../pages/SignupPage/SignupPage';
import CreateTeamPage from '../../pages/CreateTeamPage/CreateTeamPage'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state={
      pokemon:[],
      searchTerm: '',
      searchResult: {},
      message: "",
      user: userService.getUser()
    };
  }

  async componentDidMount() {
    axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&&limit=964`)
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

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser()});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route exact path='/' render={() =>
            <PokemonPage 
            user={this.state.user}
            handleLogout={this.handleLogout}
            />
          }/>
            <Route exact path='/pokemonboard' render={() =>
            <PokemonBoard 
            user={this.state.user}
            handleLogout={this.handleLogout}
            />
          }/>
            <Route exact path='/createteam' render={({history}) =>
            <CreateTeamPage 
            user={this.state.user}
            history={history}
            handleLogout={this.handleLogout}
            />
          }/>
            <Route exact path='/pokemonsearch' render={() => 
            <SearchPokemon
            handleSearch={this.handleSearch}
            handleChange={this.handleChange} 
            pokemon={this.state.pokemon}
            searchResult={this.state.searchResult}
            message={this.state.message}
            />
          }/>
          <Route exact path='/signup' render={({ history }) =>
          <SignupPage
          history={history}
          handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/login' render={({ history }) =>
          <LoginPage 
          history={history}
          handleSignupOrLogin={this.handleSignupOrLogin}
            />  
          }/>
          </Switch>
        </header>
      </div>
    );
  }
}

export default App;
