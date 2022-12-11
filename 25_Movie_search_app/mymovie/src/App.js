
import './App.css';
import Navbar from './component/Navbar';
import MovieCard from './component/MovieCard';
import Footer from './component/Footer';
import { useState } from 'react';
import data from "./data/data.json";
const App=()=> {
  //hooks
  const [searchValue,setSearchValue]=useState("")

  //input function 
  const inputHandler= (event)=>{
    setSearchValue(()=>event.target.value)
  }
  //function for return cards or i.e. it will return cards in MovieCard.js 
  const returnCards=()=>{
    console.log(data)
    return data.filter((item)=>item.title.toLowerCase().includes(searchValue.toLocaleLowerCase())|| searchValue===""
    )
  }

  return (
    <div className="App">
      <Navbar inputHandler={inputHandler}/>
      <MovieCard data={data} returnCards={returnCards}/>
      <Footer/>
    </div>
  );
}

export default App;
