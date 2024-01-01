import React from 'react'
import PokemonPreview from './PokemonPreview'
import Pagination from './Pagination'
import { paginatePokemons } from "/src/utils/pagination.js"
import { useState } from 'react'
import "/src/components/styles/PokemonList.css"
const PokemonList = ({pokemons}) => {
const [currentPage, setCurrentPage]=useState(1);
const {lastPage, pagesInCurrentBlock, pokemonsInCurrentPage}=paginatePokemons(pokemons, currentPage);

  return (
    <main>
     <section className='All__pokemons'>
       {pokemonsInCurrentPage.map((pokemon) => (
            <PokemonPreview key={pokemon.url} pokemonURL={pokemon.url}/>
            ))}
  </section>
  <Pagination 
  lastPage={lastPage}
  pagesInCurrentBlock={pagesInCurrentBlock}
  setCurrentPage={setCurrentPage}
  currentPage={currentPage}
  />
</main>
  )
}

export default PokemonList