import React from 'react'
import "/src/components/styles/Pagination.css"
const Pagination = ({ lastPage, pagesInCurrentBlock, setCurrentPage, currentPage}) => {

  const handleLastPage = () => {
    setCurrentPage(lastPage);
  }
  const handleFirstPage = () => {
    setCurrentPage(1);
  }
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  }

  const handlePreviousPage = () => {
   if(currentPage>1){
    setCurrentPage(currentPage - 1);
   }
  }
  return (
    
    <section className='pagination'>

    <button onClick={handleFirstPage} className='btn__arrowTwo'>{"<<"}</     button>
    <button onClick={handlePreviousPage} className='btn__arrowOne'>{"<"}</button>

    {pagesInCurrentBlock.map((page)=>
        <li className='list'  key={page}>

            <button style={{backgroundColor:page===currentPage?"#DD1A1A":null, color:page===currentPage?"white":null}}
            onClick={()=>setCurrentPage(page)} 
            className='btns'>{page}</button>
        </li>)
    }

  <li>
   
    <button onClick={handleNextPage} className='btn__arrowThree'>{">"}</button>
    <button onClick={handleLastPage} className='btn__arrowFour'>{">>"}</button>
  </li>
  </section>
  )
};

export default Pagination