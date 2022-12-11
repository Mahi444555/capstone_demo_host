// import { createContext, useContext } from "react";

// //creating context
// const userContext=createContext();

// //functional component
// function App(){
//   return(
//     <div>
//       <Navbar/>
//       <userContext.Provider value={{user:'John Doe', age:45, email:"john@gmail.com",loc:"california"}}>
//       <MainPage/>
//       </userContext.Provider>

//     </div>
//   )
// }
// export default App;

// function Navbar(){
//   return(
//     <h1 style={{backgroundcolor:'red'}}>mahesh jadhav</h1>
//   )
// }

// //another component
// function MainPage(){
//   return(
//     <div>
//     <h3>Mainpage</h3>
//     <Content/>
//     </div>
//   )
// }

// //another component
// function Content(){
//   return(
//     <div>
//       <Message/>
//     </div>
//   )
// }


// //another component where we accessing all values of contextAPI .Provider

// function Message(){

//   //using destructing method we access that variables values
//   const {user,age,email,loc}=useContext(userContext);

//   return(
//     <>
//     <p>welcome {user}</p>
//     <p>Age:{age}</p>
//     <p>email:{email}</p>
//     <p>loc:{loc}</p>

//     </>
//   )
// }


//---/////// second page....

// import './App.css';
// import React, { createContext,useContext} from 'react'; //when we using contextapi to solove propDrilling probl imprt

// //creating context api's 
// const FirstName = createContext();

// function App() {

//   return (
//     <div>

//     <Navbar/>
//     <FirstName.Provider value={{ name: 'mahi', city: 'India', age: 23  }}>

//         <Data/>
//     </FirstName.Provider>

//     </div>
//   );
// }

// export default App;

// //creating another component
// const Navbar =()=>{

//   return(
//     <div>
//     <h1 style={{backgroundcolor:'red'}}>Navbar-component</h1>
//     <p>This component we rendering inside App i.e. first component</p>
//     <Info/>
//     </div>
//   );
// }

// //creating another class component 
// class Info extends React.Component{
//   render(){
//     return(
//       <div>      
//           <h1>mahesh</h1>

//       </div>
//     )
//   }
// }


// //last compoent wehre we using context provider all variables values using destructuring method
// //access all varibles using destructuring method ;
// //and if we using conextAPI values outside page or another file then use .Consumer
// function Data(){
// //destrcuturing: -
// const {name,city,age}=useContext(FirstName);
//   return(
//     <div>
//       <h1>my name is: {name}</h1>
//       <h3>my city is: {city}</h3>
//       <h2>my age is: {age}</h2>
//     </div>
//   )
// }



//new project
// import React,{useState} from "react";
// import  { useEffect} from "react";
// import Login from "./Login";
// import datas from './data.json';
// import "./App.css";
// function App(){

//   //creating varible/obj which contian username,pass
//   const loginUser={
//     username:"admin@gmail.com",
//     password:"admin123"
//   }

//   //creating hook
//   const[user,setUser]=useState({email:""})

//   const[Employee,setEmp]=useState([]);  //these hook created for to stored all json data from data.json hence emty array

//   //crating hook called useEffect
//     useEffect(()=>{
//       setEmp(datas)
//     },[]);


//     //creating function which called from Login.jsx which passed argument datta: email & password
//     const loginUserFn=(details)=>{
//       if(details.email==loginUser.username && details.password==loginUser.password)
//       {
//           setUser(
//             {
//               email:details.email,
//             }
//           );
//           console.log(user)
//       }else{
//         alert("Invalid Credentials, kindly check username password");
//       }
//     }

//   return(
//     <div className="App">
//       {user.email?(      //here used ternary operator : "condition:exp1?exp"
//           <div className="container">
//           <h1>welcome to Employee list page</h1>
//           <table border={5} cellPadding={20} >
//           <tbody>
//               <tr>
//                 <td>ID</td>
//                 <td>Name</td>
//                 <td>Age</td>
//                 <td>Gender</td>
//                 <td>Email</td>
//                 <td>Phone</td>
//               </tr>
//             {datas.user.map((usesr,id)=>{  //from login.jsx we accessing datas stroing all data : datas.user.map((user,id))
//                 return(                                          //whr .user: is actual object name,& user: referene id is:Id                              
//                   <tr key={id}>  
//                     <td>{user.id}</td>
//                     <td>{user.name}</td>
//                     <td>{user.age}</td>
//                     <td>{user.gender}</td>
//                     <td>{user.phone}</td>
//                   </tr>
//                 )
//             })}
//           </tbody>
//           </table>
//           </div>
//       ):(
//         <Login loginUserFn={loginUserFn} errors={alert}/>
//       )};
// </div>
//   );
//     }

// export default App;




import React, { useState } from 'react';
import { useEffect } from 'react';
import Login from './Login';
import datas from "./data";
import "./App.css";
  
function App() {
    const loginUser = {
        username: "admin@gmail.com",
        password: "admin123"
    }

    const [user, setUser] = useState({ email: "" });
    //eslint-disable-next-line
    const [Employees, setEmps] = useState([]);


    useEffect(() => {
        setEmps((datas))
    }, []);


    const loginUserFn = (details) => {
        if (
            details.email === loginUser.username &&
            details.password === loginUser.password) {
            setUser({
                email: details.email,
            });
            console.log(user)
        } else {
            alert("Invalid Credentials.Kindly Check username or password")
        }
    }

    return (
        <div className="App">
            {user.email ? (
                <div className="container">
                    <h1>Welcome To Employee List data_page</h1>
                    <table border={5} cellPadding={20}>
                        <tbody>
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Age</td>
                                <td>Gender</td>
                                <td>Email</td>
                                <td>Phone</td>
                            </tr>
                            {datas.user.map((user, idx) => {
                                return (
                                    <tr key={idx}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.age}</td>
                                        <td>{user.gender}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            ) : (
                <Login loginUserFn={loginUserFn} errors={alert} />
            )}
        </div>
    );
}




export default App;