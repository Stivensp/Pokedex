import React from 'react'
import "/src/components/styles/Pagination.css"
const Pagination = ({ lastPage, pagesInCurrentBlock, setCurrentPage, currentPage}) => {
  return (
    <section className='pagination'>

    {pagesInCurrentBlock.map((page)=>
        <li className='list'  key={page}>

            <button style={{backgroundColor:page===currentPage?"#DD1A1A":null, color:page===currentPage?"white":null}}
            onClick={()=>setCurrentPage(page)} 
            className='btns'>{page}</button>
        </li>)
    }

  </section>
  )
};

export default Pagination