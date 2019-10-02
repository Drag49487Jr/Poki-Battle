import React from 'react';
import axios from 'axios';


class PokiApi extends React.Component {

    componentDidMount() {
        axios.get(`https://pokeapi.co/api/v2/pokemon/ditto`)
            .then(res => 
                console.log(res));
    }

    render() {
        return (
            <ul></ul>
        )
    }
}

export default PokiApi;