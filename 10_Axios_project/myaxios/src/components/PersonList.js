import React from 'react';
import axios from 'axios';


export default class PersonList extends React.Component {
    state={
        persons:[]
    }
    //hook componentDidMount 

    componentDidMount(){
        axios.get(`https://63340be0433198e79dce668c.mockapi.io/users`)
        .then(res=>{
            const persons=res.data;
            // console.log(persons)
            this.setState({persons})
        })
    }

    render(){
        return(
            <ol>
            
                {
                  
                    this.state.persons
                    .map(person=>
                   
                    <li key={person.id}>{person.name}</li>
                   
                  
                    )
                    
                  
                }
            </ol>
        )
    }
}
