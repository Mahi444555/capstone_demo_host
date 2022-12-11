// import React,{useContext} from 'react'
// import {Link, useNavigate} from "react-router-dom"
// import { UserContext } from '../App';

// const Navbar=()=> {
//   const {state,dispatch}=useContext(UserContext)
//   const navigate=useNavigate();
//   const renderList=()=>{
//     if(state) //here  just checking if state i.e. if user is already logedIn thne redirect directly to show profile and create post
//     {
//       return[
//         <li><Link to="/profile">Profile</Link></li>,
//         <li><Link to="/Create">CreatePost</Link></li>,
//         <li>
//         <button className="btn waves-effect waves-light #1976d2 red darken-2" type="submit" name="action"
//         onClick={()=>{
//           localStorage.clear();
//           dispatch({type:"CLEAR"})
//           navigate('/signin')
//         }}>
//          Logout</button>
//         </li>
//       ]
//     }else{    //else if no state there i.e. logedIn by user then show this two option
//       return [
//         <li><Link to="/signin">Login</Link></li>,
//         <li><Link to="/signup">SignUp</Link></li>
//       ]
//     }
//   }

//   return (
// //  above line for brand-logo we given a ternary condition Link to = if state(tokon) i.e.(if user already logined/signed in then redireact Link to root/Home page '/') else redireact signIn page
//   <nav>
//     <div class="nav-wrapper black"> 
//       <Link to={state?"/":"/signin"} class="brand-logo left ">Instagram</Link> 
//       <ul id="nav-mobile" class="right hide-on-med-and-down">
//       {renderList()}
//       </ul>
//     </div>
//   </nav>
        
//   )
// }

// export default Navbar


//////////////////////////////////////////////////////

import React,{useContext} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { UserContext } from '../App';

const Navbar=()=> {
  const {state,dispatch}=useContext(UserContext)
  const navigate=useNavigate()
  const renderList=()=>{
    if(state)
    {
      return [
        <li><Link to="/profile">Profile</Link></li>,
        <li><Link to="/create">CreatePost</Link></li>,
        <li>
           <button class="btn waves-effect waves-light #1976d2 red darken-2" type="submit" name="action"
      onClick={()=>{
        localStorage.clear();
        dispatch({type:"CLEAR"})
        navigate('/signin')
      }}>
      Logout</button>
        </li>
      ]
    }else{
      return [
        <li><Link to="/signin">Login</Link></li>,
        <li><Link to="/signup">Signup</Link></li>
      ]
    }
  }

  return (
    
  <nav>
  <div class="nav-wrapper white">
    <Link to={state?"/":"/signin"} class="brand-logo left">Instagram</Link>
    <ul id="nav-mobile" class="right hide-on-med-and-down">
      {renderList()}
    </ul>
  </div>
</nav>

  )
}

export default Navbar