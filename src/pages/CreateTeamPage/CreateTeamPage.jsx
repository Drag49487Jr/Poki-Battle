import React, {Component} from 'react';
import TeamForm from '../../components/TeamForm/TeamForm';

class CreateTeamPage extends Component {

    render() {
        return(
            <div>
                TeamForm
                <TeamForm 
                    user={this.props.user}
                    handleLogout={this.props.handleLogout}
                />
            </div>
        )
    }
}

export default CreateTeamPage;