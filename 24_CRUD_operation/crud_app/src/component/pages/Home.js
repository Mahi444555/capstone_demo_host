import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


const Home = () => {
  //create the hooks 
  const [users, setUsers] = useState([]); //and assign empty arrary to users i.e. initial state

  useEffect(() => {
    loadUser();  //calling function
  }, []) //this ,[] array is for not print infinite times or call loadUser() so i'ts dependency

  const loadUser = async () => {
    //this method used to fetch all data
    const result = await axios.get("http://localhost:3001/users");
    console.log(result);
    setUsers(result.data); //now we updating  empty array [] initialState i.e. users using currentState i.e. setUsers 
  };

  const deleteUser = async (id)=>{
    await axios.delete(`http://localhost:3001/users/${id}`);
    loadUser();
  }

  return (
    <div className='container'>
      <h1>Home Page</h1>
      <table class="table">
        <thead>
          <tr className='bg-dark text-white'>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">User Name</th>
            <th scope="col">Emails</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody>
                {users.map((user,index)=>{
                  return(
                  <tr>
                    <th scope='row'>{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>
                    <Link to={`/user/${user.id}`} className='btn btn-light'><i class="bi bi-eye-fill"></i></Link>
                    <Link to={`/user/edit/${user.id}`} className='btn btn-light'><i class="bi bi-pencil"></i></Link>
                    <Link to="" className='btn btn-light' onClick={()=>{deleteUser(user.id)}}><i class="bi bi-trash"></i></Link>
                    </td>
                  </tr>
              )})}
        </tbody>
      </table>
    </div>
  )
}

export default Home