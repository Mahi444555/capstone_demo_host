import React from 'react';
import datas from './data.json';  //importing json data 

const App = () => {

  return (


    <>
  
      {
        datas.map((item) => {
          return (
            <div>
              <h1>Id: {item.id}</h1>
              <h2>Name: {item.name}</h2>
              <h3>City: {item.city}</h3>
              <h4>Job: {item.job}</h4>
              <div className='box'>
                <img src={ item.icon } alt="empty"/>
            </div>
            </div>
          )
        })
      }
    </>
  )
}

export default App;