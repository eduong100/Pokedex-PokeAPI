import React, { Component } from 'react'
import PokemonList from '../pokemon/PokemonList'

export default class Dashboard extends Component {
    render() {
        return (
            <div className='row'>
                <div className='col'> 
                    <PokemonList 
                        currentPage={this.props.currentPage} postsPerPage={this.props.postsPerPage}
                        totalPokemon={this.props.totalPokemon} togglePopup={this.props.togglePopup}
                    />
                </div>
            </div>
        )
    }
}
