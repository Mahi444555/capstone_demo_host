import React from "react";           //import React,{Component} from "react";

class ClassComp extends React.Component{
    constructor(props)
    {
        super(props)
        //this.state={ name:'mahi'} //this state object used to create object and assing values to vrriable
    }

//here we can create functions 

    render(){
        return(
            <div>
                <h1>This is class component </h1>
            </div>
        )
    }


}

export default ClassComp;