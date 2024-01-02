import React, { useEffect, useState } from 'react'
import "/src/components/styles/PokemonPreview.css"
import axios from 'axios';
import { Link } from 'react-router-dom';
const PokemonPreview = ({pokemonURL}) => {
    const [pokemonInfo, setPokemonInfo] = useState(null)
    useEffect(()=>{
        axios.get(pokemonURL)
        .then((data) => setPokemonInfo(data))
        .catch((err) => console.log(err))
      },[]);
    
      const card = document.getElementById("Cards_");//?Dos variables
      const CardHover = document.getElementById("Cards_;hover");//?Una variable
      const Card__header = document.getElementById("Cards_header");//?Una variable
      const pokemon__name = document.getElementById("pokemon__name");//?Una variable
      const stat = document.getElementById("stat");//?Una variable
      
    const  gradientsByType={
        grass: {  backgroundColor: "white" },
        fire: { backgroundColor: "white" },
        water: { backgroundColor: "white" },
        electric: { backgroundColor: "white" },
        normal: { backgroundColor: "white" },
        poison: { backgroundColor: "red" },
        ground: { backgroundColor: "white" },
        fairy: { backgroundColor: "white" },
        fighting: { backgroundColor: "white" },
        flying: { backgroundColor: "white" },
        dragon: { backgroundColor: "white" },
        ice: { backgroundColor: "white" },
        ghost: { backgroundColor: "white" },
        steel: { backgroundColor: "white" },
        rock: { backgroundColor: "white" },
        dark: { backgroundColor: "white" },
        unknown: { backgroundColor: "white" },
        shadow: { backgroundColor: "white" },
        bug: { backgroundColor: "white" },
        psychic: { backgroundColor: "white" },
      };


  return (
    
        <Link  id='Cards_' to={`/pokedex/${pokemonInfo?.data.id}`}>
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
                    <li key={stat.stat.name}>{stat.stat.name}<br></br> <span id='stat'>{stat.base_stat}</span></li>
                ))}
        </div>
        </Link>
   
  );
};

export default PokemonPreview