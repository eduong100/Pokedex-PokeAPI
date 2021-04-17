import React, { Component } from 'react';
import axios from 'axios';

import PokemonCard from './PokemonCard';

export default class PokemonList extends Component {
    state = {
        url: `https://pokeapi.co/api/v2/pokemon/?limit=${this.props.totalPokemon}`,
        pokemon: null
    };
    async componentDidMount() { 
        const res = await axios.get(this.state.url);
        this.setState({ pokemon: res.data['results'] });
    };

    render() {
        const indexOfLastPost = this.props.currentPage * this.props.postsPerPage;
        const indexOfFirstPost = indexOfLastPost - this.props.postsPerPage;
        let curPokemon = this.state.pokemon;
        if (this.state.pokemon) {
            curPokemon = this.state.pokemon.slice(indexOfFirstPost,indexOfLastPost)
        }
        return ( 
            <React.Fragment>
                {curPokemon ? (
                    <div className='row'>
                        { curPokemon.map(pokemon => (
                            <PokemonCard 
                                key={pokemon.name}
                                name={pokemon.name}
                                url={pokemon.url}
                                togglePopup={this.props.togglePopup}
                            />
                        ))}
                    </div>
                ) : (
                    <h1>Loading...</h1>
                )}
            </React.Fragment> 
        );
    }
}
