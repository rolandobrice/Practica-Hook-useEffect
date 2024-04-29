import React, { useEffect, useState } from 'react'

const CicloVida = () => {

    const [usuarios, setUsuarios] = useState([])

    useEffect (() => {
        fetch('https://reqres.in/api/users')
        .then(data => data.json())
        .then(json => setUsuarios(json.data))
    }, []);

    return (
        <div>
            <h2>CicloVida</h2>
            <ul>
                {usuarios.map(usuario => (
                    <li>{usuario.first_name} 
                    {usuario.last_name}</li>
                ))}
            </ul>
        </div>
    )
}

export default CicloVida