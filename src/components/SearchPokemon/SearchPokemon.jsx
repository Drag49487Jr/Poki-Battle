import React from 'react';
import NavBar from '../NavBar/NavBar';

const SearchPokemon = (props) => {
            const {region,teamName} = props.history.location.state;
    return(
        <div>SearchPokemon
            <NavBar 
            user={props.user}
            />
            {teamName}<br />
            {region}
            <h3>Enter Name</h3>
            <form onSubmit={props.handleSearch}>
                <input onChange={props.handleChange} name="searchTerm" type="text"/>
                <button type="submit">Search</button>
            </form>
            {
                !props.message && props.searchResult.name ? 
                <p>{props.searchResult.name} {props.searchResult.url}</p>
                : <p>{props.message}</p>
            }
        </div>
    )
};

export default SearchPokemon;