import React from "react";

// class Hello extends React.Component{

//     constructor(props){
//         super(props);
//         //Extract the first name where we assing in index.js file from props
//         let firstname=this.props.name.split(" ")[0];
//         //this.state : used to update the firstname variable or assign vlaue to it
//         this.state={
//             name:firstname
//         }
//     }

//     render(){
//         return(
//             <h1>Hello,{this.state.name}</h1>
//         )
//     }
// }

// export default Hello;


//this is above function component where we created arrow function
const Hello=props=>{
    return <h1>Hello,{props.name}</h1>
}
export default Hello;