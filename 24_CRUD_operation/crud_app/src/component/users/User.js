import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, useNavigate, useParams } from "react-router-dom";


const User = () => {
//in this page we have to print id,name,username etc then declare that variable under useState
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""

    });

    //here we passed id from that page then just use with params i.e. parameters 
    const { id } = useParams();

    useEffect(() => {
        loadUser();

    }, []);


    const loadUser = async () => {
        const res = await axios.get(`http://localhost:3001/users/${id}`);
        // console.log(result);
        setUser(res.data); //now we updating  empty array [] initialState i.e. users using currentState i.e. setUsers 
    };

    return (
        //    <div className='container py-4'>
        //    <Link className='btn btn-primary' to="/">back to Home</Link>
        //    <h1 className='display-4'>User Id:{id}</h1>
        //    <hr/>
        //    <ul className='list-group w-50'>
        //     <li className='list-group-item '>name:{user.name}</li>
        //     <li className='list-group-item'>username:{user.username}</li>
        //     <li className='list-group-item'>Email:{user.email}</li>
        //     <li className='list-group-item'>Phone:{user.phone}</li>
        //     <li className='list-group-item'>website:{user.website}</li>
        //    </ul>
        //    </div>


        <div className='conatainer py-5'>
           
            <h1 className='display-4'>User Id:{id}</h1>
            <hr />
            <div className="input-group container py-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="">name:</span>
                </div>
                <li type="text" className="form-control">{user.name}</li>
            </div>

            <div className="input-group container py-2">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="">username:</span>
                </div>
                <li type="text" className="form-control">{user.username}</li>
            </div>

            <div className="input-group container py-2">
                <div className="input-group-prepend">
                    <span className="input-group-text " id="">email:</span>
                </div>
                <li type="text" className="form-control">{user.email}</li>
            </div>


            <div className="input-group container py-2">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="">phone:</span>
                </div>
                <li type="text" className="form-control">{user.phone}</li>
            </div>

            <div className="input-group container py-2">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="">website:</span>
                </div>
                <li type="text" className="form-control">{user.website}</li>
            </div>

            <Link className='btn btn-success'  to="/">back to Home</Link>
        </div>
    )
};

export default User