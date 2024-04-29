import React, { useState } from 'react'
import { useEffect } from 'react'

const Simple = () => {

    const [message, setMessage] = useState('')
    const [count, setCount] = useState(0)

    useEffect(() => {
        
    }, [])

    return (
        <div>
            <h2>Practica useEffect</h2>
            <p>{message}</p>
            <input type="text" onChange={(event) => {
                setMessage(event.target.value)
            }} />
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>
                CLICK
            </button>
        </div>
    )
}

export default Simple