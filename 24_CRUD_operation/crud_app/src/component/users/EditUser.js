import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";


const EditUser = () => {


    const navigate = useNavigate();
    const { id } = useParams();   //useParams() this hook used when we passing id or any data through url like Link to=`{/user/${uesr.id}}` to access that paramers 
    console.log(id)
    //create hooks for user,username,email,phone,website
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""

    });


    useEffect(() => {
        loadUser();
    }, []);


    const loadUser = async () => {
        //this method used to fetch all data
        const result = await axios.get(`http://localhost:3001/users/${id}`);
        console.log(result);
        setUser(result.data); //now we updating  empty array [] initialState i.e. users using currentState i.e. setUsers 
    };


    //create onInputChange function it will called form input filed
    const { name, username, email, phone, website } = user; //here user containing all value which we now assigning to variables i.e name,email etc
    const onInputChange = (e) => {
        console.log(e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value })   //here updating our user i.e. initialState
    };


    //create onSubmit() method put() is used to update or edit data
    const onSubmit = async (e) => {
        e.preventDefault();

        await axios.put(`http://localhost:3001/users/${id}`, user);
        navigate("/");
    };

    return (
        <div className='container'>
            <div className=' mx-auto shadow p-5'>
                <h2 className='text-center mb-4'>Add A User</h2>
                <form onSubmit={e => onSubmit(e)}>  
                    <div className='form-group'>
                        <input
                            type="text"
                            className="form-group form-control w-100 mb-2"
                            placeholder="Enter Your Name"
                            name="name"
                            value={name}
                            onChange={e => onInputChange(e)}
                        />
                    </div>

                    <div className='form-group'>
                        <input
                            type="text"
                            className="form-group form-control w-100 border-blue mb-2"
                            placeholder="Enter Your Username"
                            name="username"
                            value={username}
                            onChange={e => onInputChange(e)}
                        />
                    </div>

                    <div className='form-group'>
                        <input
                            type="text"
                            className="form-group form-control w-100 mb-2"
                            placeholder="Enter Your Email"
                            name="email"
                            value={email}
                            onChange={e => onInputChange(e)}
                        />
                    </div>

                    <div className='form-group'>
                        <input
                            type="text"
                            className="form-group form-control w-100 mb-2"
                            placeholder="Enter Your Phone"
                            name="phone"
                            value={phone}
                            onChange={e => onInputChange(e)}
                        />
                    </div>

                    <div className='form-group'>
                        <input
                            type="text"
                            className="form-group form-control w-100 mb-2"
                            placeholder="Enter Your website name"
                            name="website"
                            value={website}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <button className='btn btn-warning btn-block'>Update User</button>
                </form>
            </div>
        </div>

    )
}

export default EditUser