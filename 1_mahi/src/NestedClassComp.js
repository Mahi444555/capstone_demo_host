import React from "react";

class NestedClassComp extends React.Component{
    //here we creating class component within class ie. parent and child and access parent property 
    constructor(props){
        super(props)

        this.state={    //creating state object inside constructor and creating variables assing value
            name:'mahi'
        }
    }


    render(){
        //here before return we can declare vairables
        const data=10;
        return(
            <div>
                <Child message="message for child"/>
                <Child message={data}/> 
            </div>
        )
    }
}   //here closed parent class-component

class Child extends React.Component{
    constructor(props){
        super(props)

        // this.state={    //creating state object inside constructor and creating variables assing value
        //     name:'mahi'
        // }
   }

    render(){
        return(
            <h1>{this.props.message}</h1>
        )
    }
}


export default NestedClassComp;