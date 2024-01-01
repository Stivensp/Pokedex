import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import "/src/components/styles/Pokedex.css"
import PokemonList from '../components/PokemonList'
import axios from 'axios'
const Pokedex = () => {
 const [allPokemons, setAllPokemons] = useState([])
  const handleclick=(e)=>{
    e.preventDefault()
    console.log(e.target)
  }

  useEffect(()=>{
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=1302")
    .then((data) => setAllPokemons(data.data.results))
    .catch((err) => console.log(err))
  },[]);

  const trainerName=useSelector((store)=> store.trainerName.name)
  return (
   
    <section className='Alls__container'>
      <main id='Pokeballs__container'>
       <div id='Pokeballs__red'>
        <img id='img__pokedex' src="\img\home\Pokedex.png" alt="" />
       </div>
       <div className='Pokeballs__black'>
        <img id='img__blacks' src="\img\home\Group 217.png" alt="" />
       </div>
       <div className='second__container'>
        <p id='phaser'>
          <b style={{color:"#FE1936"}}>Welcome {trainerName}</b>, here can you find your favorite Pokemon
        </p>
      </div>
      <div className='third__container'>

      <form className='form' action="">
        <input className='input' type="text" placeholder='Search' />
        <button onClick={handleclick} className='btn__search'>Search</button>
      </form>
      <div id='select'>
      <select className='select__container' name="" id="">
        <option value="">All pokemons</option>
      </select>
      </div>
    

      </div>
    
      <PokemonList pokemons={allPokemons}/>
 

      </main>
    
      </section>
  )
}

export default Pokedex