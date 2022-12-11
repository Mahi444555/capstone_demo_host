import React from "react"

//firstly create array of object
const data = [
    {id: 1,name: "Pavan",age: 25},

    {id: 2,name: "Sunil",age: 24},

    {id: 3,name: "Mahi",age: 21},
    {id: 4,name: "Sumesh",age: 23},
    {id: 5,name: "Jenney",age: 18},

]           //closed array of object


//now create funcitonal-component
function List() {
    return (
        //create section
        <section>
            {data.map((item)=>{
                return <Person key={item.id} {...item}></Person>
            })}
        </section>
    )
}

//again create another funciton to dispaly name
const Person=({name,age})=>{
    return(
           <h1>
            {name}:{age}
           </h1>
    )
}


export default List;

