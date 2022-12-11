

// import React, { createContext, useContext, useEffect, useReducer } from 'react';
// // import  ReactDOM  from 'react-dom';
// import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
// import './App.css';
// import Navbar from './components/Navbar';
// import CreatePost from './components/screens/CreatePost';
// import Home from './components/screens/Home';
// import Profile from './components/screens/Profile';
// import SignIn from './components/screens/SignIn';
// import Signup from './components/screens/Signup';
// import UserProfile from './components/screens/UserProfile';
// import { reducer, initialState } from "./reducers/useReducers";

// export const UserContext = createContext();

// const Routing = () => {
//   const navigate = useNavigate()
//   const { state, dispatch } = useContext(UserContext)
//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     console.log(user)
//     console.log(typeof user)
//     if (user) {
//       dispatch({ type: "USER", paylod: user });
//       navigate('/')
//     } else {
//       navigate('/signin')
//     }


//   }, [])
//   return (
//     <Routes>
//       <Route exact path="/" element={<Home />}></Route>
//       <Route path="/signup" element={<Signup />}></Route>
//       <Route path="/signin" element={<SignIn />}></Route>
//       <Route exact path="/profile" element={<Profile />}></Route>
//       <Route path="/create" element={<CreatePost />}></Route>
//       <Route path="/profile/:userid" element={<UserProfile/>}></Route>
//     </Routes>
//   )
// }

// function App() {
//   const [state, dispatch] = useReducer(reducer, initialState)
//   return (
//     <UserContext.Provider value={{state,dispatch}}>
//       <BrowserRouter>
//         <Navbar />
//         <Routing />
//       </BrowserRouter>
//     </UserContext.Provider>

//   );
// }

// export default App;


////////////////////////////////////////////////////

import React,{ createContext,useContext,useReducer,ect, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import CreatePost from './components/screens/CreatePost';
import Home from './components/screens/Home';
import Profile from './components/screens/Profile';
import SignIn from './components/screens/SignIn';
import Signup from './components/screens/Signup';
import {reducer,initialState} from "./reducers/useReducers";
import UserProfile from './components/screens/UserProfile';
export const UserContext=createContext();

const Routing=()=>{
  const navigate=useNavigate()
  const {state,dispatch}=useContext(UserContext)
  useEffect(()=>{
    const user=JSON.parse(localStorage.getItem("user"));
    console.log(user)
    console.log(typeof user)
    if(user){
      dispatch({type:"USER",paylod:user});
    }else{
      navigate('/signin')
    }
  },[])
  return (
    <Routes>
    <Route exact path="/" element={<Home />}></Route>
    <Route  path="/signup" element={<Signup />}></Route>
    <Route  path="/signin" element={<SignIn />}></Route>
    <Route exact path="/profile" element={<Profile />}></Route>
    <Route path="/create" element={<CreatePost/>}></Route>
    <Route path="/profile/:userid" element={<UserProfile/>}></Route>
    </Routes>
  )
}

function App() {
  const [state,dispatch]=useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
    <Navbar/>
    <Routing/>
   </BrowserRouter> 
  </UserContext.Provider>
  );
}

export default App;