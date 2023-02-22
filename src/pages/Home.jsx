import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Clock from '../components/Clock'
import { setNameTrainer } from '../store/slices/trainerName.slice'
import './styles__pages/home.css'

const Home = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSumit = e => {
        e.preventDefault()
        dispatch(setNameTrainer(e.target.name.value.trim()))
        e.target.name.value = ''
        navigate('/pokedex')
    }

    return (
        <div className='home'>
            <Clock />
            <img src="/pokedex.png" alt="" />
            <div className='home_welcome'>
                <h1>¡Hi Trainer!</h1>
                <p>Give your name to get in your pokedex</p>
            </div>
            <form className='home__form' action="" onSubmit={handleSumit} autoComplete='off'>
                <input className='home__form-input' id='name' type="text" placeholder='Your name' />
                <button className='home__form-btn'>START</button>
            </form>
        </div>
    )
}

export default Home