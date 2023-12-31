import React from 'react'
import "/src/components/styles/Home.css"
import { setTrainerName } from '../store/slices/trainerName.slice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit=(e)=>{
   e.preventDefault()
   dispatch(setTrainerName(e.target.trainerName.value));
   navigate("/pokedex")
  }
  return (
    <main>
      <section className='Main__container'>

        <article className='White__container'>
          <div className='All__container'>
          <img className='img__pokedex' src="\img\home\Pokedex.png" alt="" />
        <p id='hello'>¡Hola entrenador!</p>
        <p id='para'>Para poder comenzar, dame tu nombre</p>

        <form onSubmit={handleSubmit} typeof='text' htmlFor="">
          <input autoComplete='off' required name='trainerName'  id='bar' type="text" />
        <button className='btn__start'>Comenzar</button>
        </form>
          </div>
        </article>


        <article className='Red__container'>
        <div className='red'>
        <img id='img__black' src="\img\home\Group 217.png" alt="" />
        </div>
        <div className='black'>
        
        </div>
        </article>
      </section>
    </main>
  )
}

export default Home