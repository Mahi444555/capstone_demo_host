import React from 'react';
import { useState } from 'react';


function Props_drilling(){
  const [user,setUser]=useState({name:"John Doe"});
  return(
    <div>
    <Navbar/>
    <MainPage user={user}/>

    </div>
  )
}

export default Props_drilling;

//Navbar Component
function Navbar(){
  return <nav style={{background:"#10ADDE",color:"#fff"}}>Demo App</nav>
}


//MainPage Component
function MainPage({user}){
  return(
    <div>
      <h3>Main Page</h3>
      <Content user={user} />
      
    </div>
  )
}


//Content Component
function Content({user}){
  return(
    <div>
      <Message user={user}/>
    </div>
  )
}




//Message Component
function Message({user}){
  return<p>Welcome, {user.name}</p>
}

