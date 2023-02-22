import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './pokecard.css'

const PokeCard = ({ pokemon }) => {

    const [poke, setPoke] = useState()

    useEffect(() => {
        const url =
            axios.get(pokemon.url)
                .then(res => setPoke(res.data))
                .catch(err => console.log(err))
    }, [])

    console.log(poke?.types);
    return (
        <article className={`pokecard ${poke?.types[0].type.name}`}>
            <header className={`pokecard__header ${poke?.types[0].type.name}1`}>
                <img src={poke?.sprites.other["official-artwork"].front_default} alt="" />
            </header>
            <h3 className='pokecard__name'>{poke?.name}</h3>
            <ul className='pokecard__type'>
                {
                    poke?.types.map(type => (
                        <li className='pokecard__type-item' key={type.type.name}>{type.type.name}</li>
                    ))
                }
            </ul>
            <hr className='pokecard__hr' />
            <ul className='pokecard__details'>
                {
                    poke?.stats.map(stat => (
                        <li className='pokecard__details-item' key={stat.stat.url}>
                            <span className='pokecard__details-name'>{stat.stat.name}</span>
                            <span className='pokecard__details-stat'>{stat.base_stat}</span>
                        </li>
                    ))
                }
            </ul>
        </article>
    )
}

export default PokeCard