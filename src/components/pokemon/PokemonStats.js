import React, { Component } from 'react'
import axios from 'axios'

export default class PokemonStats extends Component {
    state = {
        name: '',
        pokemonIndex: '',
        imageUrl: '',
        types: [],
        description: '',
        stats: {
            hp: '',
            attack: '',
            defense: '',
            speed: '',
            specialAttack: '',
            specialDefense: '' 
        }
    }
    async componentDidMount() {
        this.setState({pokemonIndex: this.props.id})
        const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${this.props.id}`
        const speciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${this.props.id}`

        const pokemonRes = await axios.get(pokemonUrl)

        const name = pokemonRes.data.name
        const imageUrl = pokemonRes.data.sprites.front_default

        let {hp,attack,defense,speed,specialAttack,specialDefense} = ''

        pokemonRes.data.stats.map(stat => {
            switch(stat.stat.name) {
                case 'hp':
                    hp=stat['base_stat']
                    break
                case 'attack':
                    attack=stat['base_stat']
                    break
                case 'defense':
                    defense=stat['base_stat']
                    break
                case 'speed':
                    speed=stat['base_stat']
                    break
                case 'special-attack':
                    specialAttack=stat['base_stat']
                    break
                case 'special-defense':
                    specialDefense=stat['base_stat']
                    break
            }
        })
        const types = pokemonRes.data.types.map(type => type.type.name)
        let description = ''
        await axios.get(speciesUrl).then(res => {
            res.data.flavor_text_entries.some(flavor => {
                if(flavor.language.name === 'en') {
                    description = flavor.flavor_text
                    return
                }
            })
        })
        this.setState({
            name,
            imageUrl,
            types,
            description,
            stats: {
                hp,
                attack,
                defense,
                speed,
                specialAttack,
                specialDefense
            }
        })
    }
    render() {

        return (
            <div className='col'>
                <div className='card'>
                    <div className='card-header'>
                        <div className='row'>
                            <div className='col-5'>
                                <h5>{this.state.pokemonIndex}</h5>
                            </div>
                            <div className='col-7'>
                                <div className='float-right'>
                                    {this.state.types.map(type => (
                                        <h4><span key={type}
                                        className='badge badge-pill mr-1'>{type}</span></h4>
                                    ))}
                                </div>
                            </div>
                        </div>
                    <div className='card-body'>
                        <div className='row align-items-center'>
                            <div className='col-md-3'>
                                <img src={this.state.imageUrl} 
                                className='card-img-top rounded mx-auto mt-2' />
                            </div>
                            <div className='col-md-9'>
                                <h4 className='mx-auto'>
                                    {this.state.name.toLowerCase()
                                    .split(' ')
                                    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                                    .join(' ')
                                    }
                                </h4>  
                                <div className='row align-items-center'>
                                    <div className='col-12 col-md-3'>HP:</div>
                                    <div className='col-12 col-md-9'>
                                        {this.state.stats.hp}
                                    </div>
                                </div>
                                <div className='row align-items-center'>
                                    <div className='col-12 col-md-3'>Attack:</div>  
                                    <div className='col-12 col-md-9'>
                                        {this.state.stats.attack}
                                    </div>
                                </div>    
                                <div className='row align-items-center'>
                                    <div className='col-12 col-md-3'>Defense:</div>
                                    <div className='col-12 col-md-9'>
                                        {this.state.stats.defense}
                                    </div>
                                </div>
                                <div className='row align-items-center'>
                                    <div className='col-12 col-md-3'>Special-Attack:</div>
                                    <div className='col-12 col-md-9'>
                                        {this.state.stats.specialAttack}
                                    </div>
                                </div>
                                <div className='row align-items-center'>
                                    <div className='col-12 col-md-3'>Special-Defense:</div>
                                    <div className='col-12 col-md-9'>
                                        {this.state.stats.specialDefense}
                                    </div>
                                </div>
                                <div className='row align-items-center'>
                                    <div className='col-12 col-md-3'>Speed:</div>
                                    <div className='col-12 col-md-9'>
                                        {this.state.stats.speed}
                                    </div>
                                </div>       
                            </div>
                        </div>
                        <div className='row-mt-1'>
                            <div className='col'>
                                <p className='p-2'>{this.state.description}</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
