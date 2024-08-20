import { useState } from "react";
import { useNavigate } from "react-router";

const TitleBar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const navigate = useNavigate();
  const showMenu = () => {
    setIsMenuVisible(true);
  };
  const hideMenu = () => {
    setIsMenuVisible(false);
  };

  const signOut = () => {
    localStorage.clear("adminLogin");
    navigate("/login");
  };
  return (
    <div className=" grid grid-flow-col text-white font-bold font-sans">
      <div className="hidden md:block mx-10 uppercase ">Beauty Bella</div>
      <div className="flex justify-end mx-10" onMouseLeave={hideMenu}>
        <div className="flex ">
          <img
            className="inline-block h-9 w-9 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="not found!"
          />
        </div>
        <div>
          <div className="p-2 cursor-pointer" onMouseEnter={showMenu}>
            Admin
          </div>
          {isMenuVisible && (
            <div className="absolute right-10 w-35 bg-white rounded-md shadow-lg z-10">
              <ul>
                <li className="block px-4 py-2 cursor-pointer text-gray-800 rounded-md hover:bg-gray-100">
                  Setting
                </li>
                <li
                  className="block px-4 py-2 cursor-pointer text-gray-800 rounded-md hover:bg-gray-100"
                  onClick={() => signOut()}
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TitleBar;
