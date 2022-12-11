// import React, { useState } from "react";

// // passing two props i.e. loginUserFn:its function , and errors through function
// const Login = ({ loginUserFn, errors }) => {

//     //creating hooks in that creating  it's varible email,password as empty because these we don't know until now..
//     const [details, setDetails] = useState({ email: "", password: "" })


//     //creating func handleSubmit in that passing details(current-state): which storing email and password as argument to loginUserFn()

//     const handleSubmit = (e) => {
//         e.preventdefault(); //use preventdefault()  to change original event/ work/behaviour of elemnt to new of then use preventdefault()
//         loginUserFn(details)     //

//     }
//     return (
//         <div className="login">
//             {/*  <p>{errors.errors}</p>*/}
//             <form onSubmit={handleSubmit}>   //whn user submit it will to handleSubmit() fun... and pass all values i.e. email & pass
//                 <div className="form-group">
//                     <h1>welcome to our page </h1>
//                     <h2>Login Form</h2>
//                     <br />
//                     <br />
//                     <label>Enter userName or email:</label>
//                     <br /><br />
//                     <input type="text" name="email" id="email" onChange={(e) => setDetails({ ...details, email: e.target.value })} />
//                     {""}
//                     <br />
//                 </div>

//                 <div className="form-group">
//                     <label>Enter you password</label>
//                     <br /><br />
//                     <input type="password" id="password" onChange={(e) => setDetails({ ...details, password: e.target.value })
//                     }
//                      name="password" />  {""}
//                     <br/><br />
//                 </div>

//                 <div className="form-group">
//                 <br/>
//                 <br/>                    //when clicking on btn it will call to handleSubmit and pass input filed emil,pass  
//                 <button onClick={handleSubmit} value="Login">Login</button> 
//                 </div>
//             </form>

//         </div>
//     );
// }
// export default Login;






//same code above

import React, { useState } from "react";

const Login = ({ loginUserFn, errors }) => {
    const [details, setDetails] = useState({ email: "", password: "" })

    const handleSubmit = (e) => {
        e.preventDefault();
        loginUserFn(details)
    }
    return (
        <div className="login">
            {/* <p>{errors.errors}</p> */}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <h1>Welcome to our page</h1>
                    <h2>Login Form</h2>
                    <br />
                    <br />
                    <label>Enter username or email:</label>
                    <br />
                    <br />
                    <input type="text" name="email" id="email" placeholder="admin@gmail.com"
                        onChange={(e) => setDetails({ ...details, email: e.target.value })}
                    />{""}
                    <br />
                </div>

                <div className="form-group">
                    <label>Enter your password:</label>
                    <br />
                    <br />
                    <input type="password" id="password" placeholder="admin123"
                        onChange={(e) =>
                            setDetails({ ...details, password: e.target.value })
                        }
                        name="password"
                    />{""}
                    <br />
                    <br />
                </div>
                <div className="form-group">
                    <br />
                    <br />
                    <button onClick={handleSubmit} value="Login">
                        Login
                    </button>
                </div>


            </form>
        </div>

    )
}


export default Login;