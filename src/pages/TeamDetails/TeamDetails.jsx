import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import userService from '../../utils/userService'
class TeamDetails extends Component {
    constructor(props){
        super(props);
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
    }
    render() {
        if(this.state.teams){
        console.log(this.state.teams)
        console.log('props', this.props)
        return(
            <div>
                {this.state.teams.map((team,idx) => (
                    <Link key={idx} to={`/teamdetails/${team._id}`}>
                    {team.teamName} {team.region.substring(0)}<br /></Link>
                ))}
            </div>
        )
        
        }
        return (<div>Loading</div>)
    }
}

export default TeamDetails;