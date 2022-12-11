import React,{useState} from "react";

const UseStateobj=()=>{
    //create hooks wher initial state=person: it works like obj refrece to access it's variable , current state=setperson its use to updsate hook values : 
    const [person,setperson]=useState({
        name:"Mahesh",
        age:"22",
        message:"hi folks"
    })

    //create funciotn to change hooks variables name /update its values like state obje 
    const changeMessage=()=>{
        setperson({...person , message:"hi peopel"})
    }

    return(
        <>
            <h3>{person.name}</h3>
            <h3>{person.age}</h3>
            <h4>{person.message}</h4>
            <button className="btn" onClick={changeMessage}>change mesg</button>
        </>
    )

}
export default UseStateobj;