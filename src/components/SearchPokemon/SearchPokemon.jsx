import React from 'react';

const SearchPokemon = (props) => {
    return(
        <div>SearchPokemon
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