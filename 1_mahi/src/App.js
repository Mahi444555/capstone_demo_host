// import React , {useState} from 'react';
// import { data } from './Data';


// const App=()=>{
//     const [people,setPeople]=useState(data);
    
//     const removePerson=(id)=>{
//         setPeople((people)=>{
//             return people.filter((person)=>person.id!==id);
//         })
//     };

//     return(
//         <section>
//             <h3>Props Drilling</h3>
//             <List people={people} removePerson={removePerson}/>
//         </section>
//     )

// }


// const List=({people,removePerson})=>{
//     return(
//         <>
//             {people.map((person)=>{
//                 return(
//                 <SinglePerson
//                     key={person.id}
//                     {...person}
//                     removePerson={removePerson}
//                     />
//                 )

//             })}
//         </>
//     )

// }


// const SinglePerson=({id,name,removePerson})=>{
//     return(
//         <div className="item">
//             <h4>{id}</h4>
//             <h4>{name}</h4>
//             <button onClick={()=>removePerson(id)}>remove</button>
//         </div>
//     )

// }

// export default App;




//Contaxt API: ->

import { createContext, useContext } from "react";

//userContext: it's variable whr we assign funciton to it and calling it
const userContext = createContext();//created context

//create a functional component
function App(){
   
// rendering all component here 
    return(
        //we can use div or react_fragment if multiple line <>
        <div> 
        <Navbar/>
        <userContext.Provider value={{user:"John Doe"}}>
        
        <MainPage/>

        </userContext.Provider>

        </div>
    );
}

export default App;



//2nd component creating
function Navbar(){

    return(
        <nav style={{background:"#10ADDE",color:"#fff"}}>My_APP</nav>

    )
}

//3rd component creating
function MainPage(){
 //here we accssing/rendering Content-componet
    return(
       <div>
       <h3>Main Page</h3>
       <Content/>  
       </div>
    );
}

//4rth compoent creating
function Content(){
//here we accessing Message component
return(
    <div>
        <Message/>
    </div>
)

}

//5th component creating
function Message(){
    //her we accessing state provided by context proveider i.e. function 

    const {user}=userContext(userContext)
return <p>Welcome {user}</p>


}