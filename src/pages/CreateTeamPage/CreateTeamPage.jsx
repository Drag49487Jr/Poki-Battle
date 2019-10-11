import React, {Component} from 'react';
import TeamForm from '../../components/TeamForm/TeamForm';

class CreateTeamPage extends Component {

    render() {
        return(
            <div>
                <TeamForm 
                    {...this.props}
                />
            </div>
        )
    }
}

export default CreateTeamPage;