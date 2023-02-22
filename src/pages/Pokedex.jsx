import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import PokeCard from '../components/pokedex/PokeCard'
import './styles__pages/pokedex.css'

const Pokedex = () => {

    const { nameTrainer } = useSelector(state => state)
    const [pokedexInfo, setPokedexInfo] = useState()
    const [pokedexType, setPokedexType] = useState()

    useEffect(() => {
        const url = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'
        axios.get(url)
            .then(res => setPokedexInfo(res.data))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        const url = 'https://pokeapi.co/api/v2/type/'
        axios.get(url)
            .then(res => setPokedexType(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='pokedex'>
            <h4 className='pokedex__title'><span>Hi {nameTrainer}</span>, here find your favorite pokemon.</h4>

            <div className='search'>
                <form className='search__form' action="">
                    <input id="search__pokedex" type="text" placeholder='search pokemon' />
                    <button id="search__pokedex-btn">Search</button>
                </form>
                <select className='search__pokedex-select' name="" id="">
                    <option className='pokedex__select-option' value="allpokemon">All Pokemon</option>
                    {
                        pokedexType?.results.map(type => (
                            <option value={type.url} key={type.url}>{type.name}</option>
                        ))
                    }
                </select>
            </div>

            <div className='pokedex__card'>
                {
                    pokedexInfo?.results.map(pokemon => (
                        <PokeCard
                            key={pokemon.url}
                            pokemon={pokemon}
                        />
                    ))
                }
            </div>
        </div >

    )
}

export default Pokedex