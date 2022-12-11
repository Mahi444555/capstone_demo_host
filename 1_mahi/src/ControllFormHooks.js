import React, { useState } from "react";

//create arrow functional-component 
const ControllFormHooks=()=>{

    //in functional-component we create's Hooks
    const [people,setPeople]=useState({
        name:"",        //these is variabel declared in hooks 
    })

//ceate a function to update the hooks variables : we use current-state i.e. setPeople to update it's values

   people.handleChange=(event)=>{
        setPeople({name:event.target.value})
        }

    return(
        <>
        <div className="form">
        <h1>{people.name}</h1>
        <input type="text" onChange={people.handleChange} placeholder="Enter user name"></input>
        <button onChange={people.handleChange}>update_Name</button>
        </div>
        </>
    )

}

export default ControllFormHooks;