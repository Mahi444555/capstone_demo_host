//when you use hooks with useState() then import here them itself
import { useState } from "react";

//creating Functional component in arrow funcn
const FunComphook=()=>{
    const purple="green";
    //this are Hooks with initial-state and current-state i.e. in [] that bracket
    const [bg,setbg]=useState(purple);
    const [name,setName]=useState("click"); 

    //creating function in that we assinging current-state variables of both  hook
    const bgChange=()=>{
        console.log("cliked")
        let newbg="khaki";
        setbg(newbg);       //here we passing updated values to hooks current-varibels 
        setName("Jhon Smith")   //--   --
    }

    //sencond function creating
    const bgback=()=>{
        
        setbg(purple);
        setName("Hello");
    }

    return(
        //this above <></> is react fragment when multiple lines are ther use it
        <>  
        <div style={{backgroundColor:bg}}>
            <button onClick={bgChange} onDoubleClick={bgback}>
            {name}{" "}
            </button>
        </div>
    
        </>
    )
}

export default FunComphook;
