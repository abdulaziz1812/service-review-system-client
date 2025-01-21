import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Login = () => {
  const { login, setUser } = useContext(AuthContext);
  const [error, setError] = useState({});
  const navigate = useNavigate();

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
        setUser(user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setError({ ...error, login: err.code });
      });

    setError({});
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handelSubmit}>
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
                <button className="btn btn-primary">Login</button>
              </div>
              {error.login && <p className="text-red-500">{error.login}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
