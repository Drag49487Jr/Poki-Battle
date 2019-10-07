import React, {Component} from 'react';
import NavBar from '../NavBar/NavBar';


class CreateTeam extends Component{
    render() {
        return (
            <div>
                <h1>Create Your Team</h1>
                <NavBar 
                user={this.props.user}
                handleLogout={this.props.handleLogout}
                />
                <form>
                    Enter Team Name:<input type='text'></input>
                    <select>
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