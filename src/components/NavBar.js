import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setOpen] = useState(true);

  return (
    <div className="sticky w-full">
      <nav className="items-center justify-between bg-gray-900 text-gray-100 py-8 px-6 lg:px-14 shadow-lg font-quicksand">
        <div className="flex justify-between items-center">
          <h1 className="text-xl text-red-600">Shoppies</h1>
          <button
            onClick={() => setOpen(!isOpen)}
            className="lg:hidden md:hidden focus:outline-none focus:ring focus:border-white"
            aria-label="Open Menu"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-8 h-8"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          <div className="hidden md:flex lg:flex items-center">
            <ul className="md:flex space-x-8 text-xl">
              <Link to="/">
                <li className="cursor-pointer transition hover:text-red-600">
                  Home
                </li>
              </Link>
              <Link to="/nominees">
                <li className="cursor-pointer transition hover:text-red-600">
                  Nominations
                </li>
              </Link>
            </ul>
          </div>
        </div>
        {!isOpen && (
          <aside className="md:hidden lg:hidden top-0 left-0 w-52 bg-gray-900 fixed h-full overflow-auto ease-in-out transition-all duration-900 z-50">
            <span className="flex w-full items-center py-7 border-b">
              <h1 className="text-xl text-red-600 px-6">Shoppies</h1>
            </span>
            <Link to="/">
              {" "}
              <span
                onClick={() => setOpen(!isOpen)}
                className="flex items-center py-4 px-6 cursor-pointer border-b"
              >
                <span className="cursor-pointer">Home</span>
              </span>
            </Link>

            <Link to="/nominees">
              <span
                onClick={() => setOpen(!isOpen)}
                className="flex items-center py-4 px-6 cursor-pointer border-b"
              >
                <span className="cursor-pointer">Nominations</span>
              </span>
            </Link>
          </aside>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
