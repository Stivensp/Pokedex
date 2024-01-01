import React, { useEffect, useState } from 'react'
import "/src/components/styles/PokemonPreview.css"
import axios from 'axios';
const PokemonPreview = ({pokemonURL}) => {
    const [pokemonInfo, setPokemonInfo] = useState(null)
    useEffect(()=>{
        axios.get(pokemonURL)
        .then((data) => setPokemonInfo(data))
        .catch((err) => console.log(err))
      },[]);
    
  return (
    
        <div id='Cards_'>
        <header id='Card__header'>
            <img id='imgs' src={pokemonInfo?.data.sprites.other["official-artwork"].front_default} alt="" />
        </header>
        <div id='Body__container'>
        <h3 id='pokemon__name'>{pokemonInfo?.data.name}</h3>
        <h4 id='pokemon__type'>
            {pokemonInfo?.data.types.map((type)=>type.type.name).join(" / ")}
        </h4>
        <h5 id='type'>Type</h5>
        </div>
        
        <div id='Body__type'>
            {
                pokemonInfo?.data.stats.map((stat)=>(
                    <li key={stat.stat.name}>{stat.stat.name}</li>
                ))}
        </div>
        </div>
   
  );
};

export default PokemonPreview