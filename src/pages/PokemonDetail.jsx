import React, { useEffect, useState } from 'react'
import "/src/components/styles/PokemonDetail.css"
import axios from 'axios';
import { useParams } from 'react-router-dom';
export const PokemonDetail = () => {
  const [pokemonInfo, setPokemonInfo] = useState(null)
  const {id} = useParams();

  useEffect(()=>{
    axios
    .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((data)=> setPokemonInfo(data))
    .catch((err) => console.log(err))
  },[])

  const getPorcentByStat=(stat_value)=>{
      const percent = (stat_value*100) /255
      return percent + "%"
  }
  return (
    <main className='Container__pokemonDetail'>
     <header id='PokemonDetail__header'>
      <div id='PokemonDetail__red'>
        <img id='PokemonDetail__img_Pokedex' src="\img\home\Pokedex.png" alt="" />
      </div>
      <div id='PokemonDetail__black'>

      <img id='PokemonDetail__img_Group' src="\img\home\Group 217.png" alt="" />
      </div>
     </header>

    <div className='Container__allInfo'>
      <header className='Container__header'>
      <img id='imgs__pokemon' src={pokemonInfo?.data.sprites.other["official-artwork"].front_default} alt="" />
      </header>
      <div id='Body__info'>
      <div id='Body__infoDos'>
        <p>{pokemonInfo?.data.id}</p>
      </div>

      <div id='Body__infoTres'>
      <span id='divisor'></span>  
      <p className='pokemon'>{pokemonInfo?.data.name}</p>
      <span id='divisorDos'></span>  
      </div>
      <div id='Body__infoCuatro'>
        <ul id='ul'>
          <li>
            Weight
            <br />
            <p>{pokemonInfo?.data.weight}</p>
          </li>
          <li>
            Height
              <br />
              <p>{pokemonInfo?.data.height}</p>
          </li>
        </ul>
      </div>
      <div className='Body__infoCinco'>
        <div id='Tipe'>
          <h3>Type</h3>
        </div>
        <div id='Skills'>
        <h3>Skills</h3>
        </div>
      </div>

      <div className='Body__infoSeis'>
      <div className='DivUno'>
        
      <div className='TypeUno'><p>{pokemonInfo?.data.types[0].type.name}</p></div>
        <div className='TypeDos'><p>{pokemonInfo?.data.types[0].type.name}</p></div>
      </div>
      <div className='DivDos'>
        <div className='SkillUno'>{pokemonInfo?.data.abilities[0].ability.name}</div>
        <div className='SkillDos'>
Chlorophyll</div>
      </div>
      </div>

      <div className='Division__skills'>
      <header className='Division__skills_Header'>
        <h3>Skills</h3>
      </header>
      <ul className='Unorganized_list'>
      
    {pokemonInfo?.data.stats.map((stat)=> 
    (<li id='li__stat' key={stat.stat.name}>
      <div className='Container__statss'>
      {stat.stat.name} <span className='doscinco'> {stat.base_stat}/255</span>
      </div>
     
      <div className='Container__bar'>
        <div style={{width:getPorcentByStat(stat.base_stat)}} id='Progress__bar'>

        </div>
      </div>
    </li>
    ))}

      </ul>
      </div>

      <div className='Division__AllSkills'>
        <header id='AllSkills__header'>
          <h3>Movements</h3>
        </header>
        <div id='Container__AllSkills'> 

        {pokemonInfo?.data.moves.map((move)=> 
        (<div id='AllSkills__li' key={move.move.name}>
          <p>{move.move.name}</p>
        </div>
        ))}
        </div>
      </div>
      </div>
    </div>


    </main>
  )
}
