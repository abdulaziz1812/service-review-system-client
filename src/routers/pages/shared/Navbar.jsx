import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from"../../../assets/Icon.png"

const Navbar = () => {
    // const { user, logOut } = useContext(AuthContext);

  const link = (
    <>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/services'>Services</NavLink>
      </li>
      <li>
        <NavLink to='/add-service'>Add Service</NavLink>
      </li>
      <li>
        <NavLink to='/my-reviews'>My Reviews</NavLink>
      </li>

     
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              
            >
                {link}
            </ul>
          </div>
          <img 
          src={logo} 
          alt="logo"
          className="w-12"
          />
          <a className="btn btn-ghost text-xl">Review Radar</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-1">
            
                 {link}
          </ul>
        </div>
        <div className="navbar-end">
        
          <div className="flex items-center justify-center gap-2">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar tooltip tooltip-left"
                
                >
                  <div className=" rounded-full">
                    <img
                      alt="profile"
                      src={
                        
                        "https://img.icons8.com/?size=48&id=O9K5DaypaVKw&format=gif"
                      }
                    />
                  </div>
                </div>
              </div>
              <button 
            //   onClick={logOut}
              className="btn btn-sm ">
                Log Out
              </button>
            </div>

            <div className="flex items-center gap-2">
              <Link to="/login">
                <button className="btn btn-sm ">
                  Login
                </button>
              </Link>
              <div >or</div>
              <Link to="/register">
                <button className="btn btn-sm ">
                  Register
                </button>
              </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
