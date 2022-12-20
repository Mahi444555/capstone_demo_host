import React from 'react'
import Caraousal from '../components/Caraousal'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <div>
      <div><Navbar /></div>
      <div><Caraousal/></div>
      <div className='m-3'>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />

      
      </div>
      <div>  <Footer /></div>
    </div>
  )
}

export default Home