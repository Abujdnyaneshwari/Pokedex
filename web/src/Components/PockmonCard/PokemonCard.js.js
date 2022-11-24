import React from 'react';
import './PockmonCard.scss';

function PokemonCard(props) {
    const pData = props.data;
    const name = pData && pData.pokemon && pData.pokemon.name;
    const id = props.id;
    const imgUrl =  pData && pData.pokemon && pData.pokemon.url;
    return (
        <div className='card px-[30px] pt-[20px]'>
            <div className='cardTitle flex justify-center'>Pokedex</div>
            <div className='flex items-center mt-[40px] mb-[50px]'>
                <div className='text-[18px] text-[#fff]'>
                    <div>
                        <span className='font-bold'>Name : </span>
                        <span>{name}</span>
                    </div>
                    <div className='my-[10px]'>
                        <span className='font-bold'>ID : </span>
                        <span>{id + 1}</span>
                    </div>
                </div>

                <div className='ml-auto'>
                    <img
                        src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id+1}.svg`}
                        className='w-[170px] h-[170px] rounded-lg'
                    />
                </div>
            </div>

            <button className='w-full border-2 py-[5px] bold rounded text-[#fff] cursor-pointer font-bold tracking-[2px]'>CLICK TO OPEN</button>
        </div>
    );
}

export default PokemonCard;