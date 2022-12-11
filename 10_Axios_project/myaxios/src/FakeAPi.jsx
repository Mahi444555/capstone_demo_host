
import React, { useState, useEffect } from 'react';
import axios from 'axios';
function FakeAPi() {

    const [posts, setPost] = useState([]);  //created hook where initialstate is assigned by empty array 

     useEffect(()=>{
        fetchData();    //calling to function
    })

    const fetchData = async () => {
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/photos");
        console.log(data);
        setPost(data);  //udpading state using currentState or storing data to posts(i.e. initialState)
    }

    return(
        <div className="App">
        {
            posts.map((post)=>{
                return(
                <div key={post.id}>
                <h1>{post.title}</h1>
                <img src={post.url}/>
                <h3>More on:</h3>
                <img src={post.thumbnailUrl}/>
                </div>
                )
            })
        }
        </div>
    )
    


}

export default FakeAPi;