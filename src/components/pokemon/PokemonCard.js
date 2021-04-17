import React, { Component } from 'react'

import { button } from 'react-bootstrap'
import styled from 'styled-components'

const Sprite = styled.img`
    width: 5em;
    height: 5em;
    display: none;
`;

export default class PokemonCard extends Component {
    state = {
        name: '',
        imageUrl: '',
        pokemonIndex: '',
        imageLoading: true,
        tooManyRequests: false
    };
    componentDidMount() {
        const { name, url } = this.props;
        const pokemonIndex = url.split('/')[url.split('/').length - 2];
        //const imageUrl = `https://github.com/PokeAPI/sprites/tree/master/sprites/pokemon/${pokemonIndex}.png`
        this.setState({
            name,
            //imageUrl,
            pokemonIndex
        })
    }
    render() {
        return (
            <div className='col-md-3 col-sm-6 mb-5'>
                <div className='card'>
                    <h5 className='card-header'>{this.state.pokemonIndex}</h5>
                    {/*<Sprite 
                        className="card-img-top rounded mx-auto mt-2" 
                        onLoad={() => this.setState({imageLoading: false})}
                        onError={() => this.setState({tooManyRequests: true})}
                        src={this.state.imageUrl}
                    /> */}
                    <div className='card-body mx-auto'>
                        <h6 className='card-title'><button onClick={() => this.props.togglePopup(this.state.pokemonIndex)}>{this.state.name}</button></h6>
                    </div>    
                </div>
            </div>
        )
    }
}
