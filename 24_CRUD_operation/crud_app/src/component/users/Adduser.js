import axios from 'axios';
import React,{useState} from 'react'
// import { useHistory } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
const Adduser=()=> {
const navigate = useNavigate();
//create hooks for user,username,email,phone,website
    const [user,setUser]=useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:""
    
    });

//create onInputChange function it will called form input filed
const {name,username,email,phone,website}=user;
const onInputChange = (e) =>{
    console.log(e.target.value);
    setUser({...user,[e.target.name]:e.target.value})
}


//create onSubmit() method
const onSubmit =  async (e)=>{
 e.preventDefault();

        await  axios.post("http://localhost:3001/users",user);
    navigate("/");
}

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
                    <button className='btn btn-primary btn-block'>Add User</button>
                </form>
            </div>
        </div>
    )
}

export default Adduser