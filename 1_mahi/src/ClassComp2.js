import React  from "react";

class ClassComp2 extends React.Component{
    constructor(props)
    {
        super(props)

        this.state= {     //this is creating an state object inside constructor
                name:'mahi',
                count: 0 
            };
            this.CountInc=this.CountInc.bind(this); 
    }

//here create function for change name where ChangeName() its fun_Name & this.setState() used to update state obj valus
        ChangeName=()=>{
            this.setState({
                name:'jadhav'
            })
        }


    //this is for second button fuction
        CountInc=()=>{
           this.setState((st)=>{
            return st.count+=1;
           })
        }
        

    render(){
        return(
            <div>
                <h1>This is class component we creating object inside constructor & access it's values</h1>
                <p>{this.state.name}</p>
                <h3>{this.state.count}</h3>
                <button onClick={this.ChangeName}>ChangeName</button>
                <button onClick={this.CountInc}>incremntCount</button>
            </div>
        )
    }

}

export default ClassComp2;