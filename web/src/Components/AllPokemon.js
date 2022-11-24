import React, { useState, useEffect } from 'react';
import PokemonCard from './PockmonCard/PokemonCard.js'
import axios from 'axios';

function AllPokemon(props) {
    const [pokemonData, setPokemonData] = useState([]);
    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/type/3")
            .then((response) => {
                const apiResponse = response.data;
                setPokemonData(apiResponse);
            }).catch(error => {
                console.log(error);
            });
    }, []);

    console.log("pokemon", pokemonData.pokemon);

    return (
        <>
            <div className='grid grid-cols-3'>
                {pokemonData.pokemon && pokemonData.pokemon.map((item, idx) => (
                    <div key={idx}>
                        <PokemonCard data={item} id={idx}/>
                    </div>
                ))}
            </div>
        </>
    );
}

export default AllPokemon;