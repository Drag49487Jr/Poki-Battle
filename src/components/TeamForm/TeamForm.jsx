import React, {Component} from 'react';
import NavBar from '../NavBar/NavBar';
import userService from '../../utils/userService';

class CreateTeam extends Component{
    constructor() {
        super();
        this.state={
            teamName:'',
            region:''
        }
    }


    handleChange = async (e) => {
        this.setState({...this.state, [e.target.name]:e.target.value })
    }


    handleSubmit = async (e) => {
        e.preventDefault();
        try{
            this.props.history.push({
                pathname:'/pokemonsearch',
                state:{
                    teamName:(this.state.teamName),
                    region:(this.state.region)
                }
            })
        } catch (err) {
            console.log(err)
        }
    }

    addTeam = async (e, newTeam) => {
        e.preventDefault();
        try{
            userService.addTeam(newTeam)
            this.props.history.push({
            pathname:'/pokemonsearch',
            state: {
                teamName:(this.state.teamName),
                region:(this.state.region)
            }
        })
        } catch (err) {
            console.log(err)
        }
    }


    render() {
        return (
            <div>
                <h1>Create Your Team</h1>
                <NavBar 
                user={this.props.user}
                handleLogout={this.props.handleLogout}
                />
                <form>
                    Enter Team Name:<input name='teamName' value={this.state.teamName} onChange={this.handleChange} type='text'></input>
                    Select Region: <select name='region' value={this.state.region} onChange={this.handleChange}>
                        <option>Oblivia</option>
                        <option>Kanto</option>
                        <option>Hoenn</option>
                        <option>Johto</option>
                        <option>Sinnoh</option>
                        <option>Alola</option>
                        <option>Kalos</option>
                        <option>Unova</option>
                        <option>Fiore</option>
                        <option>Almia</option>
                    </select>
                <button onClick={this.addTeam}>Create Team</button>
            </form>
        </div>
    )
    }
}



export default CreateTeam;