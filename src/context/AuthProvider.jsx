import { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import {createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";
import auth from '../firebase/firebase.init';

const AuthProvider = ({children}) => {
    const [user, setUser] =useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (updatedData) => {
        setLoading(true);
        updateProfile(auth.currentUser, updatedData);
        setUser({ ...auth.currentUser, ...updatedData });
      };

      useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log(currentUser);
            setLoading(false)
        })

        return () =>{
            unsubscribe()
        }
      },[])

    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        updateUserProfile,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;