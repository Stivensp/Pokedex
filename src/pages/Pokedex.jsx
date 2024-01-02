import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import "/src/components/styles/Pokedex.css"
import PokemonList from '../components/PokemonList'
import axios from 'axios'
const Pokedex = () => {
 const [allPokemons, setAllPokemons] = useState([])
 const [pokemonName, setPokemonName]=useState("")
 const [types, setTypes]=useState([])
  const handleSubmit=(e)=>{
    e.preventDefault()
   setPokemonName(e.target.PokemonName.value.toLowerCase())
  }

  const pokemonsByname=allPokemons.filter((pokemon)=>
  pokemon.name.includes(pokemonName.trim())
  );
 console.log(pokemonsByname)
  useEffect(()=>{
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=1302")
    .then((data) => setAllPokemons(data.data.results))
    .catch((err) => console.log(err))
  },[]);


    useEffect(()=>{
      axios.get("https://pokeapi.co/api/v2/type")
      .then((data) => setTypes(data.data.results))
      .catch((err) => console.log(err))
    },[]);

     const handleChangeType=(e)=>{
       const url= e.target.value;
       axios
       .get(e.target.value)
       .then(({data})=> {
        if(url.includes("type")){
        const pokemonFormat=  data.pokemon.map((pokemon)=>pokemon.pokemon);
        setAllPokemons(pokemonFormat)
        }else{
          setAllPokemons(data.results);
        }
       
       })
       .catch((err) => console.log(err))
     }


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

      <form autoComplete='off' onSubmit={handleSubmit} className='form' action="">
        <input name='PokemonName' className='input' type="text" placeholder='Search' />
        <button  className='btn__search'>Search</button>
      </form>
      <div id='select'>

      <select onChange={handleChangeType}  className='select__container' name="" id="">
        <option value="">All pokemons</option>
        {types.map((type)=> (
            <option value={type.url} key={type.name}>{type.name}</option>
          ))}

      </select>
      </div>
    

      </div>
    
      <PokemonList pokemons={pokemonsByname}/>
 

      </main>
    
      </section>
  )
}

export default Pokedex