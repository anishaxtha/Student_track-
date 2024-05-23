import React from "react";
import { Menu } from "antd";
import logo from "../assets/track.png";
import { Link, useLocation } from "react-router-dom";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { IoCreate, IoHomeSharp } from "react-icons/io5";
import { CiViewList } from "react-icons/ci";

const Navbar = () => {
  const location = useLocation();
  const isHomeRoute = location.pathname === "/";

  return (
    <>
      <div className="flex justify-between mx-10 ">
        <div>
          <Link to="/">
            <img
              src={logo}
              className="w-24 h-24 cursor-pointer ml-5"
              alt="Logo"
            />
          </Link>
        </div>

        {isHomeRoute && (
          <div className="flex items-center justify-center w-20">
            <Link
              className="flex items-center justify-center gap-1"
              to="/logout"
            >
              <span>LogOut</span>
              <RiLogoutCircleRLine className="mr-5" size={24} />
            </Link>
          </div>
        )}
      </div>

      <div className="flex items-center justify-center w-full gap-5">
        <Menu
          mode="horizontal"
          className="flex justify-around w-full max-w-96 font-semibold"
        >
          <Menu.Item key="1">
            <Link to="/" className="flex items-center gap-1">
              <IoHomeSharp size={20} />
              Home
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/table" className="flex items-center gap-1">
              <CiViewList size={20} />
              TableList
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/create" className="flex items-center gap-1">
              <IoCreate size={20} />
              Create
            </Link>
          </Menu.Item>
        </Menu>
      </div>
    </>
  );
};

export default Navbar;
