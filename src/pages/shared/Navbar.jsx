import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/Icon.png";
import AuthContext from "../../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const link = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
    </>
  );
  const authLink = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/add-service">Add Service</NavLink>
      </li>
      <li>
        <NavLink to="/my-reviews">My Reviews</NavLink>
      </li>
      <li>
        <NavLink to="/my-services">My Services</NavLink>
      </li>
    </>
  );
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="navbar ">
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
              {user && user?.email ? authLink : link}
            </ul>
          </div>
          <img src={logo} alt="logo" className="w-12" />
          <a className="btn btn-ghost text-xl">Review Radar</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-1">
            {user && user?.email ? authLink : link}
          </ul>
        </div>
        <div className="navbar-end">
          {user && user?.email ? (
            <div className="flex items-center justify-center gap-2">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar tooltip tooltip-left"
                  data-tip={user?.displayName || "Profile"}
                >
                  <div className=" rounded-full">
                    <img
                      alt="profile"
                      src={
                        user?.photoURL ||
                        "https://img.icons8.com/?size=48&id=O9K5DaypaVKw&format=gif"
                      }
                    />
                  </div>
                </div>
              </div>
              <button onClick={logout} className="btn btn-sm btn-accent">
                Log Out
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <button className="btn btn-sm btn-accent">Login</button>
              </Link>
              <div>or</div>
              <Link to="/register">
                <button className="btn btn-sm btn-accent ">Register</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
