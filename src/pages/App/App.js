import React, {Component} from 'react';
import { Route, Switch, } from 'react-router-dom';
import userService from '../../utils/userService';
import PokemonBoard from '../../components/PokemonBoard/PokemonBoard';
import SearchPokemon from '../../components/SearchPokemon/SearchPokemon';
import PokemonPage from '../../pages/PokemonPage/PokemonPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import SignupPage from '../../pages/SignupPage/SignupPage';
import CreateTeamPage from '../../pages/CreateTeamPage/CreateTeamPage'
import TeamDetails from '../../pages/TeamDetails/TeamDetails';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state={
      user: userService.getUser(),
    };
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
      <div>
          <Switch>
            <Route exact path='/' render={() =>
            <PokemonPage 
            user={this.state.user}
            handleLogout={this.handleLogout}
            />
          }/>
            <Route path='/pokemonboard' render={({history}) =>
            <PokemonBoard 
            history={history}
            user={this.state.user}
            handleLogout={this.handleLogout}
            />
          }/>
            <Route path='/createteam' render={({history}) =>
            <CreateTeamPage 
            user={this.state.user}
            history={history}
            handleLogout={this.handleLogout}
            />
          }/>
            <Route exact path='/teamdetails' render={({history}) =>
            <TeamDetails 
              history={history}
              user={this.state.user}
              handleLogout={this.handleLogout}
            />
          }/>
            <Route path='/teamdetails/:id' render={(props) => 
            <SearchPokemon
            {...props}
            user={this.state.user}
            handleLogout={this.handleLogout}
            />
          }/>
          <Route path='/signup' render={({ history }) =>
          <SignupPage
          history={history}
          handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route path='/login' render={({ history }) =>
          <LoginPage 
          history={history}
          handleSignupOrLogin={this.handleSignupOrLogin}
            />  
          }/>
          </Switch>
      </div>
    );
  }
}

export default App;
