import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'

import app from '../firebase/firebase.init';


export const AuthContext= createContext();
const auth = getAuth(app);

  const AuthProvider = ({children}) => {


    const createUser = (email,password) =>{
      
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const  signIn =(email,password)=>{
       
        return signInWithEmailAndPassword(auth,email,password)
     }

     // ------ GOOGLE SignIn ------
    function providerLogin(provider) {
       
        return signInWithPopup(auth, provider);
    }
    const logout =() => {
        
        return signOut(auth);
     }

    const authInfo ={createUser,signIn,providerLogin,logout}

    return (
        <div>
              <AuthContext.Provider value={authInfo}>
               {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;