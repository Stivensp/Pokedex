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
    <article>
        <header>
            <img src={pokemonInfo?.data.sprites.other["official-artwork"].front_default} alt="" />
        </header>
        <h3>{pokemonInfo?.data.name}</h3>
        <h4>
            {pokemonInfo?.data.types.map((type)=>type.type.name).join(" / ")}
        </h4>
        <ul>
            <li>fuego</li>
            <li>volador</li>
        </ul>
        <h5>Types</h5>
        <ul>
            {
                pokemonInfo?.data.stats.map((stat)=>(
                    <li key={stat.stat.name}>{stat.stat.name}</li>
                ))}
        </ul>
    </article>
  );
};

export default PokemonPreview