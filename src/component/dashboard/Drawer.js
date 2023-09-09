import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { auth } from "../Auth/firerbase";
import { useNavigate } from "react-router-dom";

const Drawer = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  const closeDrawer = () => {
    setIsOpen(false);
  };
  const handleLogout = async () => {
    try {
      await auth.signOut(); // Sign out the user using Firebase
      console.log("User signed out");
      navigate("/signup"); // Redirect to signup page
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="absolute top-0 left-0 mt-2 ml-2">
      <button
        className="cursor-pointer text-gray-300 hover:text-white"
        onClick={toggleDrawer}
      >
        <GiHamburgerMenu size={32} style={{ color: "black" }} />
      </button>
      {isOpen && (
        <div className="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-4">
          <button
            className="absolute top-0 left-0 mt-2 ml-2"
            onClick={closeDrawer}
          >
            <ImCross size={32} style={{ color: "white" }} />
          </button>
          <div className="absolute w-full h-full" onClick={closeDrawer}>
            <p className="text-lg font-bold"></p>
            <ul className="mt-4">
              <NavLink to="/contact" activeClassName="active-link">
                <li className="mb-2">Contact</li>
              </NavLink>
              <NavLink to="/view" activeClassName="active-link">
                <li className="mb-2">View Contact</li>
              </NavLink>
              <NavLink to="/chart" activeClassName="active-link">
                <li className="mb-2">Charts</li>
              </NavLink>
              <NavLink to="/map" activeClassName="active-link">
                <li className="mb-2">Map</li>
              </NavLink>
              <button color="blue" onClick={handleLogout}>
                Logout
              </button>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Drawer;
