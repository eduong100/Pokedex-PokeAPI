import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import Dashboard from './Dashboard'
import Search from './Search'
import axios from 'axios'
import Pagination from '../service/Pagination'
import PokemonCard from '../pokemon/PokemonCard'
import DisplayStats from './DisplayStats'

export default function Home() {
    const [pokemon, setPokemon] = React.useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, ] = useState(40);
    const [popupIsOpen, setIsOpen] = useState(false);
    const [pokemonID, setID] = useState(1);
    const totalPokemon = 1118;
    // Handle searches
    const getPokemon = async (query) => {
        if (query == '') {
            console.log("Nothing!")
            return null
        } 
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${query}`);
        if(res.data != null)
            setPokemon(res.data);
    }
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    const togglePopup = (id) => {
        setIsOpen(!popupIsOpen)
        setID(id)
    }   
    return (
        <React.Fragment>
            <NavBar /> 
                <div className='container'>
                    <Search func={getPokemon} />
                    {pokemon ? (
                        <div className='row'>
                            <PokemonCard 
                                key={pokemon.species.name}
                                name={pokemon.species.name}
                                url={pokemon.species.url}
                                togglePopup={togglePopup}
                            />
                        </div>
                    ) : null}
                    <Dashboard currentPage={currentPage} postsPerPage={postsPerPage} 
                        totalPokemon={totalPokemon} togglePopup={togglePopup} 
                    /> 
                    { popupIsOpen && <DisplayStats id={pokemonID} handleClose={togglePopup}/>}
                    <Pagination postsPerPage={postsPerPage} paginate={paginate} 
                        totalPokemon={totalPokemon}
                    />
                </div>
        </React.Fragment>
    )
   // }
}
