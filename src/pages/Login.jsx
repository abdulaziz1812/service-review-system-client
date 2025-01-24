import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import SocialLogin from "./shared/SocialLogin";
import Lottie from "lottie-react";
import loginLottieData from"../assets/lottie/login.json"
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import axios from "axios";

const Login = () => {
  const { login, setUser } = useContext(AuthContext);
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.pathname || "/";
  console.log(location);
  console.log(from);
  const handelSubmit = (e) => {
    
    e.preventDefault();
    setError({});
    const formData = new FormData(e.target);

    const initialData = Object.fromEntries(formData.entries());
    console.log(initialData);

    const { email, password } = initialData;

    login(email, password)
      .then((result) => {
        console.log(result);
        const user = result.user;
        if (user.uid) {
          Swal.fire({
            title: "Successfully Logged in",
            icon: "success",
            draggable: true,
          });
        }
        setUser(user);
         
        const users = {email: result.user.email}
        console.log(user);
        axios.post('http://localhost:5000/jwt', users ,{withCredentials: true})
        .then(res=>{
          console.log(res.data);
        })  
        navigate(from);
      })
      .catch((err) => {
        setError({ ...error, login: err.code });
      });

    setError({});
  };

  return (
    <div>
      <Helmet>
                    <title>Login-ReviewRadar</title>
                  </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div>
            <h1 className="text-5xl font-bold text-center py-8">Login now!</h1>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div>
            <Lottie animationData={loginLottieData}></Lottie>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body pb-0" onSubmit={handelSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              {error.password && (
                <label className="label text-xs text-red-500">
                  {error.password}
                </label>
              )}
              <div className="form-control mt-6">
                <button className="btn btn-primary text-white">Login</button>
              </div>
              {error.login && <p className="text-red-500">{error.login}</p>}
            </form>
            <div className="px-8 pb-8">
              <div className="divider">OR</div>
              <SocialLogin></SocialLogin>
            </div>
            <p className="text-center font-semibold pb-9">
          Don&apos;t have an account?{" "}
          <Link className="text-red-500" to="/register">
            Register
          </Link>
        </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
