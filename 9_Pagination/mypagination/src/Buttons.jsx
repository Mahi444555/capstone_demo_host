//using hooks we created increment 
import React, { useState} from "react";

function Buttons() {
    //creating hooks
    const [count, setCount] = useState(0);   //assining 0 to initialState 

    const increment = () => {
        setCount(count + 1 )
    }

    const decrement = () => {
        setCount( count -1 )
    }

    return (
        <>
            <h1>buttons logic</h1>
            <button className="btn btn-primary " onClick={increment}>increment</button>
            <h2>Count is : {count} </h2>
            <button className="btn btn-primary" onClick={decrement} >decrement</button>
        </>
    )
}
export default Buttons;