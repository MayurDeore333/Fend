import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { SET_LOGIN } from "../redux/features/auth/authSlice";
import { logoutUser } from "../services/authService";
import {
  ShowOnLogin,
  ShowOnLogout,
} from "../components/loader/protect/HiddenLink";

export default function Navbar(props) {
  const [navbar, setNavbar] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = async () => {
    await logoutUser();

    await dispatch(SET_LOGIN(false));

    navigate("/");
  };

  return (
    <nav
      className="w-full shadow mt-3"
      style={{
        backgroundColor: "#000000",
      }}
    >
      <div className="justify-between px-2 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link className="navbar-brand" style={{ color: "white" }} to="/">
              {" "}
              <img
                src="GPN_Logo-GBH.png"
                alt=""
                width="42"
                height="36"
                className="d-inline-block"
              />
              <b style={{ fontSize: "24px" }}>GRAHAK_BHANDAR</b>
            </Link>

            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center mt-3 space-y-8 md:flex md:space-x-6 md:space-y-0">
              <ShowOnLogin>
                <li className="text-white hover:text-indigo-200">
                  <Link to="/items">
                    <b>Dashboard</b>
                  </Link>
                </li>
                <li className="text-white hover:text-indigo-200">
                  <Link to="/sales">
                    <b>Add Sale</b>
                  </Link>
                </li>
                <li className="text-white hover:text-indigo-200">
                  <Link to="/addProduct">
                    <b>Add Item</b>
                  </Link>
                </li>
                <li className="text-white hover:text-indigo-200">
                  <Link to="/edit-profile">
                    <b>Settings</b>
                  </Link>
                </li>
              </ShowOnLogin>
            </ul>

            <div className="mt-3 space-y-2 lg:hidden md:inline-block">
              <ShowOnLogout>
                <Link
                  to="/login"
                  className="inline-block w-full px-4 py-2 text-center text-white bg-green-600 rounded-md shadow hover:bg-gray-800"
                >
                  Login
                </Link>
              </ShowOnLogout>
              <ShowOnLogin>
                <button
                  onClick={logout}
                  className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                >
                  Logout
                </button>
              </ShowOnLogin>
              <div className="mt-3 pl-2 space-y-2 md:inline-block">
                <input
                  className="custom-control-input pl-5"
                  onClick={props.toggleMode}
                  type="checkbox"
                  value=""
                  id="customSwitches"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden space-x-2 md:inline-block">
          <ShowOnLogout>
            <Link
              to="/login"
              className="px-4 py-2  text-white bg-green-600 rounded-md shadow hover:bg-gray-800"
            >
              <b>Login</b>
            </Link>
          </ShowOnLogout>
          <ShowOnLogin>
            <button
              onClick={logout}
              className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
            >
              <b>Logout</b>
            </button>
          </ShowOnLogin>

          <div className="mt-3 pl-2 space-y-2 md:inline-block">
            <input
              className="custom-control-input pl-5"
              onClick={props.toggleMode}
              type="checkbox"
              value=""
              id="customSwitches"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
