import React, {Component} from 'react';
import NavBar from '../NavBar/NavBar';


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
            this.props.push('/searchpokemon')
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
                <form onSubmit={this.handleSubmit}>
                    Enter Team Name:<input name='teamName' value={this.state.teamName} onChange={this.handleChange} type='text'></input>
                    <select name='region' value={this.state.region} onChange={this.handleChange}>
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
                <button>Create Team</button>
            </form>
        </div>
    )
    }
}



export default CreateTeam;