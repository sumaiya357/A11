import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='h-20'>
         <div className="navbar bg-base-100">
           <div className="navbar-start">


                    <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>

                                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                    <li ><Link >Home</Link></li>
                                    
                                    
                                    <li  tabIndex={0}>
                                    <Link className="justify-between">
                                        LogIn
                                    </Link>
                                    </li>


                                    <li className='text-lg'><Link>SignUp</Link></li>
                                </ul>
                        </div>


                    <Link className="btn btn-ghost normal-case text-xl">Timber</Link>
            </div>
                <div className="navbar-center hidden lg:flex">
                                <ul className="menu menu-horizontal p-0">
                                <li className='font-semibold'>
                                    <Link>Home</Link>
                                </li>
                               
                                <li className='font-semibold' tabIndex={0}>
                                    <Link>
                                    LogIn
                                    </Link>
                                </li>
                                <li className='font-semibold'><Link>SignUp</Link></li>
                                </ul>
                </div>


            <div className="navbar-end">
                <div className="navbar-end">
                        <button className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>

                        
                </div>
            </div>
    </div>
</div>
    );
};

export default Header;