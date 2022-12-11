import React from 'react'

const MovieCard=(props)=> {
  return (
    <section className='py-5 bg-secondary'>
    <div className='container px-4 px-lg-5 mt-5'>
        <div className='row gx-4 gx-lg-5 row-cols-2 row-cols-3 row-cols-xl-4 justify-content-center'>
      {
        props.returnCards().map((card,i)=>(
        
        <div className='col mb-5' key={i}>
        <div className='card h-100'>
        <img className='card-img-top' src={card.posterUrl} alt="product"/>
        <div className='card-body p-4'>
          <div className='text-center'>
          <h5 className='fw-bolder'>{card.title}</h5>
          </div>
        </div>
        
        <div className='card-body p-4'>
          <div className='text-center'>
          <h5 className='fw-bolder'>{card.year}</h5>
          </div>
        </div>
        </div>
        </div>
        
        ))}

        </div>
    </div>
    </section>
  )
}

export default MovieCard