import React from 'react'
import "/src/components/styles/Pagination.css"
const Pagination = ({ lastPage, pagesInCurrentBlock}) => {
  return (
    <section className='pagination'>

    {pagesInCurrentBlock.map((page)=>
        <li className='list'  key={page}>
            <button className='btns'>{page}</button>
        </li>)
    }

  </section>
  )
};

export default Pagination