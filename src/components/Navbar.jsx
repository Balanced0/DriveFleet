import React from "react";
import { Car } from "lucide-react";
import NavLink from "./NavLink";
import Link from "next/link";
import { MdLogin } from "react-icons/md";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-black shadow-sm border-b border-gray-600">
        <div className="container mx-auto flex px-4">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <NavLink href="/">Home</NavLink>
                </li>
                <li>
                  <NavLink href="/explore">Explore Cars</NavLink>
                </li>
                <li>
                  <NavLink href="/add">Add Car</NavLink>
                </li>
                <li>
                  <NavLink href="/bookings">My Bookings</NavLink>
                </li>
              </ul>
            </div>
            <div className="flex gap-2 items-center">
              <div className="bg-orange-500 p-2 rounded-2xl">
                <Car className="text-black" />
              </div>
              <a className="text-xl">
                <span className="font-extrabold">Drive</span>
                <span className="font-extrabold text-orange-500">Fleet</span>
              </a>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <NavLink href="/">Home</NavLink>
              </li>
              <li>
                <NavLink href="/explore">Explore Cars</NavLink>
              </li>
              <li>
                <NavLink href="/add">Add Car</NavLink>
              </li>
              <li>
                <NavLink href="/bookings">My Bookings</NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end hidden lg:flex">
            <Link href="/login" className="btn bg-orange-500 text-black rounded-xl">Login <MdLogin /></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
