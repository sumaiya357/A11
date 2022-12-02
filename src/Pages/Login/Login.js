import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

// import { AuthContext } from '../../Context/AuthProvider';


const Login = () => {
    const [error, setError] = useState('')
    const googleProvider = new GoogleAuthProvider();
 
    const { signIn,providerLogin } = useContext(AuthContext)
    const navigate = useNavigate();
  
   
    const handleGoogle =() =>{
        providerLogin(googleProvider)
      }


    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
        .then(result => {
            const user = result.user
            console.log(user)
            form.reset();
            setError('');

            navigate('/')
            // navigate(from,{replace:true});
        })
        .catch(error => {
            setError(error.message)
        })


    }
     
    
    return (
        <div className='myForm d-flex flex-column align-items-center mt-4  '>

            <div className="hero min-h-screen ">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        
                    </div>
                    <form onSubmit={handleSubmit}>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email"name="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>

                                <Button onClick={handleGoogle} className='mb-2 mt-5 btn btn-outline btn-info'>Signin With Google</Button><br></br>
                            </div>
                        </div>
                    </div>
                    
                    </form>
                    <p>New to this site?<Link to='/signup'>SignUp</Link></p>
                </div>
            </div>




        </div>
    );
};

export default Login;