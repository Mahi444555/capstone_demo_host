//creating controlled forms using class-component 
import React from "react";

class ControlledForms extends React.Component{

    //mendatory in class component to create constructor and super(props) in that this.state obj
    constructor(props){
        super(props);

        this.state={
            name:"",
        }
    }
//create function to mange the state of input filed
    handleChange=(event)=>{
        this.setState({name:event.target.value})
        
    }



    render(){
        return(
            <div>
                <input type="text" onChange={this.handleChange} 
                placeholder="Enter user name"></input>
                <h1>{this.state.name}</h1>
            </div>
        )
    }
}
export default ControlledForms;