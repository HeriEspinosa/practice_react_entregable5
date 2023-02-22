import React from 'react'
import './navbar.css'
import { Outlet } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <header className='pokedex__header'>
                <img className='pokedex__header-img' src="/pokedex.png" alt="" />
                <div className="pokedex__header-line1"></div>
                <div className="pokedex__header-line2"></div>
                <div className="pokedex__header-circule">
                    <div className="pokedex__header-circule1">
                        <img src="./Pokebola.png" alt="" />
                    </div>
                </div>
            </header >
            <Outlet />
        </>

    )
}

export default NavBar