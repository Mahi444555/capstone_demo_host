import React from "react";
import {data} from "./Data.js";

//create component
const Usestatearray=()=>{

    //create a hook here of name useState executes coreesponding fucn
    const [people, setPeople]=React.useState(data)

    //crete funciton we pass id of that Data file i.e. key:value
    const removeItem=(id)=>{
        let newPeople=people.filter((item)=>item.id!==id);
        setPeople(newPeople);
    }; 
    return(
        <>
            {   //here we using hook varibale or for any other variable access in return write it inside of {culry}
                people.map((item)=>{
                    const {id,name}=item; //object destrcting
                    return(
                        <div key={id} className="item">
                            <h4>{name}</h4>
                            <button onClick={()=>removeItem(id)}>remove</button>
                        </div>
                    )
                })
            }
            <button className="btn" onClick={()=>setPeople([])}>Clear item</button>
        </>
    )
}   

export default Usestatearray;