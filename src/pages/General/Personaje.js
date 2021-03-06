import React from 'react'
import { useEffect, useState } from 'react';
import '../General/Personaje.css';

export const Personajes = () => {

    const [personaje, setPersonaje] = useState([]);

    useEffect(() => {
        obtenerPersonaje();
    }, [])

    const obtenerPersonaje = async () => {
        const url = 'https://pokeapi.co/api/v2/pokemon/';
        const res = await fetch(url);
        const data = await res.json();
        const { results } = data;
        //console.log(results);
        setPersonaje(results);
    }

    console.log(personaje);

    return (
        <div>
            <h1>Pokemon</h1>
            <hr />
            {
                personaje.map(per => (

                    <div className="card" key={per.id}>
                        <img className="card-img-top" src={per.image} alt="" />
                        <div className="card-body">
                            <h5 className="card-title">{per.name}</h5>
                            <p className="card-text">{per.species}</p>
                            <a href="/" className="btn btn-primary">...Más</a>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Personajes;