import React, { useEffect, useRef } from 'react'
import '../pages/styles__pages/home.css'

const Clock = () => {

    const clock = useRef();
    const time = () => {
        const dateTime = new Date().toLocaleTimeString();
        return dateTime
    }

    useEffect(() => {
        const clockTime = setInterval(() => {
            clock.current.innerHTML = `${time()}`;
        }, 1000);

        return () => clearInterval(clockTime)
    }, [])


    return (
        <div className='clock'>
            <h2 ref={clock}>{time()}</h2>
        </div>
    )
}

export default Clock