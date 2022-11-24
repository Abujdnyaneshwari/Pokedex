import React, { useState, useEffect } from 'react';
import PokemonCard from './PockmonCard/PokemonCard.js'
import axios from 'axios';

function AllPokemon(props) {
    const [pokemonData, setPokemonData] = useState([]);
    const [pockmonCount, sertPokmonCount] = useState({
        start: 0,
        end: 20
    });

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/type/3")
            .then((response) => {
                const apiResponse = response.data;
                setPokemonData(apiResponse);
            }).catch(error => {
                console.log(error);
            });
    }, []);

    const prevPockMan = () => {
        console.log("pockmonCount21", pockmonCount);
        if (pockmonCount.start != 0) {
            sertPokmonCount(
                {
                    start: pockmonCount.start - 20,
                    end: pockmonCount.end - 20
                }
            )
        }

    }
    const nextPockMan = () => {
        if (pokemonData.pokemon.length > pockmonCount.end) {
            sertPokmonCount(
                {
                    start: pockmonCount.start + 20,
                    end: pockmonCount.end + 20
                }
            )
        }
        console.log("pockmonCount22", pockmonCount);

    }



    return (
        <>
            <div className='flex mx-[100px] mt-[40px]'>
                <div className='border-2 border-[#ef5350] font-18px] w-[200px] text-center py-2 rounded-lg cursor-pointer tracking-[1px] font-bold' onClick={() => prevPockMan()}>Prev</div>
                <div className='border-2 border-[#ef5350] font-18px] w-[200px] text-center py-2 rounded-lg cursor-pointer tracking-[1px] font-bold ml-auto' onClick={() => nextPockMan()}>Next</div>
            </div>
            <div className='container grid grid-cols-3 gap-20 mx-auto'>
                {pokemonData.pokemon && pokemonData.pokemon.slice(pockmonCount.start, pockmonCount.end).map((item, idx) => (
                    <div key={idx}>
                        <PokemonCard data={item} id={pockmonCount.start + idx} />
                    </div>
                ))}
            </div>
        </>
    );
}

export default AllPokemon;