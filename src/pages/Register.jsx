import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "./shared/SocialLogin";
import Lottie from "lottie-react";
import regLottieData from "../assets/lottie/register.json";
import { Helmet } from "react-helmet-async";
import axios from "axios";

const Register = () => {
  const { createUser, setUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const passwordValidation = (password) => {
    const upperCase = /[A-Z]/.test(password);
    const lowerCase = /[a-z]/.test(password);
    const length = password.length >= 6;

    if (!upperCase) {
      return "Password must include an uppercase letter.";
    }
    if (!lowerCase) {
      return "Password must include a lowercase letter.";
    }
    if (!length) {
      return "Password must be at least 6 characters long.";
    }
    return null;
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    setError({});
    const formData = new FormData(e.target);

    const initialData = Object.fromEntries(formData.entries());
    console.log(initialData);

    const { name, email, photo, password } = initialData;

    const passwordError = passwordValidation(password);
    console.log(passwordError);
    if (passwordError) {
      setError({ password: passwordError });
      console.log(error);
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(result);
        setUser(user);
        if (result.user.uid) {

          axios
          .post("http://localhost:5000/user", user)
          .then((result) => {
            console.log(result);
                      })
          .catch((error) => {
            console.log(error);
          });

          Swal.fire({
            title: "Registration successful! ",
            icon: "success",
            draggable: true,
          });
          e.target.reset();
          navigate(location?.state ? location.state : "/");
          setError({});
        }
        console.log(result);
        updateUserProfile({ displayName: name, photoURL: photo })
          .then((res) => {})
          .catch((err) => {});
      })
      .catch((err) => {
        setError({ reg: err.code });
      });

    setError({});
  };

  return (
    <div>
      <Helmet>
        <title>Register-ReviewRadar</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div>
          <h1 className="text-5xl font-bold text-center py-8 ">
            Register now!
          </h1>
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div>
              <div className="w-96 ">
                <Lottie animationData={regLottieData}></Lottie>
              </div>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
              <form className="card-body pb-0" onSubmit={handelSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered"
                    name="name"
                    required
                  />
                </div>
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
                    <span className="label-text">PhotoURL</span>
                  </label>
                  <input
                    type="url"
                    placeholder="PhotoURL"
                    className="input input-bordered"
                    name="photo"
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
                  <button className="btn btn-primary text-white">
                    Register
                  </button>
                </div>
                {error.reg && (
                  <label className="label text-sm text-red-500">
                    {error.reg}
                  </label>
                )}
              </form>
              <div className="px-8 pb-8">
                <div className="divider">OR</div>
                <SocialLogin></SocialLogin>
              </div>
              <p className="text-center font-semibold pb-9">
                Already have an account ?{" "}
                <Link className="text-red-500" to="/login">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
