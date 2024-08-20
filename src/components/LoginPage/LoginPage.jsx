import React, { useContext, useEffect, useState } from "react";
import { MdEmail } from "react-icons/md";
import { MdKey } from "react-icons/md";
import { AdminAuthContext } from "../../context/AdminAuthContext";
import { useNavigate } from "react-router";
const LoginPage = () => {
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { adminLogin } = useContext(AdminAuthContext);

  const adminLoginSubmit = async (e) => {
    e.preventDefault();
    const loginSuccess = await adminLogin(loginForm);
    if (loginSuccess) {
      navigate("/");
    } else {
      navigate("/login");
      setLoginForm({
        email:"",
        password:""
      })
    }
  };
  useEffect(() => {
    if (localStorage.getItem("adminlogin")) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [navigate]);
  return (
    <div className="max-w-max-[300px] diagonal-bg c-white flex items-center flex-column pb-10">
      <div>
        <h1 className="my-8 mt-20 welcome-heading m-6 text-center">
          Welcome to SALON WEB
          <br />
          Please Login to continue.
        </h1>
      </div>
      <div className="loginForm m-6">
        <h3 className="welcome-text ">Welcome please login to continue:</h3>
        <form action="" className="mt-8" onSubmit={adminLoginSubmit}>
          <div className="mt-4">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset  sm:max-w-md">
              <span className="flex select-none items-center pl-3 text-gray-400 sm:text-sm ">
                <MdEmail />
              </span>
              <input
                type="text"
                name="Email"
                id="Email"
                autoComplete="Email"
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400  focus:ring-0 focus:outline-none sm:text-sm sm:leading-6"
                placeholder="Email"
                onChange={(e) =>
                  setLoginForm({ ...loginForm, email: e.target.value , username: e.target.value})
                }
              />
            </div>
          </div>
          <div className="mt-4">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset  sm:max-w-md">
              <span className="flex select-none items-center pl-3 text-gray-400 sm:text-sm">
                <MdKey />
              </span>
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="password"
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 focus:outline-none sm:text-sm sm:leading-6"
                placeholder="password"
                onChange={(e) =>
                  setLoginForm({ ...loginForm, password: e.target.value })
                }
              />
            </div>
          </div>
          <div className="checkbox mt-4">
            <div className="relative flex gap-x-2">
              <div className="flex h-6 items-center">
                <input
                  id="check"
                  name="check"
                  type="checkbox"
                  className="h-5 w-5 rounded"
                />
              </div>
              <div className="text-sm leading-6">
                <label htmlFor="check" className="font-medium text-gray-400">
                  Remember me
                </label>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-center gap-x-6">
            <button
              type="submit"
              className="rounded-md bg-yellow-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellows-600"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
      <div className="text-gray-600 text-left hover:text-gray-800">
        <a href="#" className="">
          Forget password
        </a>
      </div>
    </div>
  );
};

export default LoginPage;
