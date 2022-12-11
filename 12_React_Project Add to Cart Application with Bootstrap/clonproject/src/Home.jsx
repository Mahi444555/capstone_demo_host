import React from "react";

//creating component
class Home extends React.Component {

    constructor(props) {
        super(props)

        this.state={
            name:'mahesh',
            age: '24'
        }

       // this.add = this.add.bind(this)  //binding the funition


        
    }
    render(){
        return(
            <div>
            <h1>mahesh jadhav</h1>
            </div>
        )
    }
}
export default Home;