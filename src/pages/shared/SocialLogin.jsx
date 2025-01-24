import { useContext, useState } from 'react';
import AuthContext from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {

const{googleLogin, setUser} = useContext(AuthContext)
const navigate = useNavigate();
const  [error, setError] =useState();
const from = location.state?.pathname || "/";

    const handelGoogleLogin = () => {
        googleLogin()
          .then((result) => {
            const user = result.user;
            setUser(user);
            navigate(from);
          })
          .catch((err) => {
            setError({ google: err.code });
          });
      };

    return (
        <div>
             <button onClick={handelGoogleLogin} className="btn btn-primary text-white w-full ">
            <FcGoogle className="text-xl" /> Login with Google
          </button>
          {error?.google && 
            (<p className="text-red-500">{error.google}</p>)
          }
          
        </div>
    );
};

export default SocialLogin;