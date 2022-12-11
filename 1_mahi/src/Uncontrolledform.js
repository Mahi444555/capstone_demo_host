import React from "react";

class Uncontrolledform extends React.Component{
//compulsory create constrctor(props){super(props); then state object like : this.state={name:'mahi}}
    constructor(props){
        super(props);

        this.state={            //Note: this.state object only create in class and hooks create in funciton to crate variabls...
            name1:'Mj444555'
        }
    }

//create a function handleClick: when we create function insdie any component then or class component then need not to datatype thm
handleClick=()=>{
    const name=this._name.value;
    alert("Hello",name)
    console.log(name)
    
    this.setState((ref)=>{       //this.setState(): used to upadate the this.state_object's variables
        return ref.name1="hello";
       })
}
render(){
    return(
        <>
        <h1>{this.state.name1}</h1>
        <div>
            <input type="text" ref={inputValue=>this._name=inputValue} placeholder="Enter your name"></input>

            <button onClick={this.handleClick}>Submit</button>
        </div>
        </>
    )
}

}

export default Uncontrolledform;