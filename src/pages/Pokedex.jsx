import React from 'react'
import { useSelector } from 'react-redux'
import "/src/components/styles/Pokedex.css"
const Pokedex = () => {
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
      </main>
    
      </section>
  )
}

export default Pokedex