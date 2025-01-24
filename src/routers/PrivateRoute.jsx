import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';
import Lottie from 'lottie-react';
import loadingLottieData from '../assets/lottie/Loading.json'

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext)
    const   location=useLocation()

    if(loading){
        
        return(
            <div className="flex items-center justify-center h-screen">
            <Lottie animationData={loadingLottieData} className='w-60 '></Lottie>
            </div>)
    }

    if(user){
        return children
    }

    return <Navigate to="/login" state={location?.pathname}></Navigate>
};

export default PrivateRoute;