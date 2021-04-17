import React from 'react'
import { Card } from 'react-bootstrap'
import { propTypes } from 'react-bootstrap/esm/Image'
import PokemonStats from '../pokemon/PokemonStats'
const DisplayStats = ( {id, handleClose} ) => {
    return (
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={handleClose}>x</span>
                <PokemonStats id={id}/>
            </div>
        </div>
    )
}

export default DisplayStats