import React, {Component} from 'react';
import { Route, Switch, } from 'react-router-dom';
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
      user: userService.getUser(),
    };
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
            <Route exact path='/pokemonboard' render={({history}) =>
            <PokemonBoard 
            history={history}
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
            <Route exact path='/pokemonsearch' render={({history}) => 
            <SearchPokemon
            history={history}
            user={this.state.user}
            handleLogout={this.handleLogout}
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
