const paginatePokemons=(pokemons, currentPage)=>{
//? CANTIDAD DE POKEMOS POR PAGINA
const POKEMONS_PER_PAGE=20;

//?lOS POKEMOS QUE SE VAN A RENDERIZAR EN LA PAGINA ACTUAL
const sliceEnd=currentPage * POKEMONS_PER_PAGE;
const sliceStart =sliceEnd - POKEMONS_PER_PAGE;
const pokemonsInCurrentPage = pokemons.slice(sliceStart, sliceEnd)

//?Ultima pagina o la cantidad de ultima paginas
const lastPage = Math.ceil(pokemons.length / POKEMONS_PER_PAGE);

const PAGES_PER_BLOCK=7;
const actualBlock = Math.ceil(currentPage/ PAGES_PER_BLOCK);
const pagesInCurrentBlock=[];
const maxPage = actualBlock * PAGES_PER_BLOCK;
const minPage = maxPage - PAGES_PER_BLOCK +1;
for(let i= minPage; i <= maxPage; i++){
    if(i<= lastPage){
        pagesInCurrentBlock.push(i);
        }
    }
    return{
        pokemonsInCurrentPage,
        lastPage,
        pagesInCurrentBlock
    };
};


export {paginatePokemons}