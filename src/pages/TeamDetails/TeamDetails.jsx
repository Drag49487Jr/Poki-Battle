import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import userService from '../../utils/userService'
class TeamDetails extends Component {
    constructor(){
        super();
        this.state= {
            teams:[]
        }
        
    }
    async componentDidMount() {
        await this.getAllTeams();
    }
    async getAllTeams() {
        let teams = await userService.getAllTeams(this.props.user._id)
        console.log('teams in route',teams)
        this.setState({teams:teams})
        console.log(this.state.teams)
    }
    render() {
        if(this.state.teams[0]){
        return(
            <div>
                {this.state.teams.map((teams,idx) => (
                    teams.teamName + <br />
                ))}
                <div>{this.state.teams.map((teams) => (
                    teams.region 
                ))}</div>
            {/* <div>{this.state.teams[0].teamName}</div>
            <div>{this.state.teams[0].region}</div> */}
            </div>
        )
        
        }
        return (<div>Loading</div>)
    }
}

export default TeamDetails;