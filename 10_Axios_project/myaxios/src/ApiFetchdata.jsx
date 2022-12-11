//using axios we fetching the data types: axios.get(), axios.post(), axios.delete(), axios.put()
import React,{useState, useEffect} from 'react';
import axios from 'axios';
const ApiFetchdata = () =>{

    //create hooks
    const [posts, setPosts] = useState([]);  //passing empty arry to assign initial-state(posts)

    useEffect(()=>{
        fetchData();    //calling function from useEffect()
    })
//creating ascync type fun to fetch data 
    const fetchData = async ()=>{
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/users")
        console.log(data);
        //now store these data into hook using currentState (setPosts) these entire dadta
        setPosts(data);
    }

    return(
        <>
            {
                posts.map((post)=>{
                    return(
                        <div key={post.id}>
                        <h1>{post.name}</h1>
                       <h2>{post.username}</h2>
                       <h3>{post.email}</h3>
                       <h4>{post.phone}</h4>
                       <h5>{post.zipcode}</h5>
                        </div>
                    )
                })
            }
        </>
    )



}
export default ApiFetchdata;