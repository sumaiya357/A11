import React, { useContext, useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
// import { AuthContext } from '../../Context/AuthProvider';


const SignUp = () => {
    const [error, setError] = useState('')
    const {createUser} = useContext(AuthContext)
    const handleSignUp =(event) =>{
      event.preventDefault();
      const form =event.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      console.log(name,email,password)
      form.reset()
  
    
     // ----- SignIn With Email Password ----
     createUser(email,password)
     .then(result => {
       const user = result.user
       console.log(user);
     })
   .catch(error => setError(error.message))
  } 
    return (
        <div>
             <div className="hero min-h-screen ">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register!</h1>
                        
                    </div>
                    <form onSubmit={handleSignUp}>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" name="name" placeholder="name" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email"  name="email" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password"  name='password' className="input input-bordered" />
                                
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">SignUp</button>
                            </div>
                        </div>
                    </div>
                    </form>
                    <p>Already have a account?<Link to='/login'>login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;