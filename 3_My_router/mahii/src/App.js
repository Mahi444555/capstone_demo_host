// import React, { Component }  from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// import About  from "./About";
// import Contact from "./Contact";
// import Error from "./Error";
// import Home from "./Home";

// class App extends Component{
//   render(){
//     return(

//       // <Router>
//       //   <div className="App">
//       //     <li>
//       //       <Link to="/">Home</Link>
//       //     </li>
//       //     <li>
//       //       <Link to="/about">About</Link>
//       //     </li>
//       //     <li>
//       //       <Link to="/contact">Contact</Link>
//       //     </li>
//       //   </div>
//       // </Router>

//       <Routes>
//         <Route  path="/" element={<Home/>}> </Route>
//         <Route exact path="/about" element={<About/>}> </Route>
//         <Route exact path="/contact" element={<Contact/>}> </Route>
//         <Route exact path="*" element={<Error/>}> </Route>
//       </Routes> 
//     )
//   }
// }

// export default App;




//-----context_API

import React, { createContext } from "react";
// import ComA from "./ComA";
import ComC from "./ComC";

//now creating ContextAPI 
const FirstName=createContext();
const LastName=createContext();

const App =()=>{
  return (
    <div>
    
    <FirstName.Provider value={"mahi"}>
      <LastName.Provider value={"jadhav"}>

          <ComC/>     //here we providing thes context api's values to these ComC Component hece render inside that

      </LastName.Provider>
    </FirstName.Provider>
  
    </div>
  )
};

export default App;
export {FirstName,LastName};    
//when we exporting contextAPI varible to another-componet then export them inside curly bracket