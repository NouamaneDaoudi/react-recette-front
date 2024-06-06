import React from 'react';
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center gap-12">
              <Link to="/" className="block text-teal-600">
                <span className="sr-only">Home</span>
                <img src="/Cooking.png" alt="Logo" className="h-16 w-auto" />
              </Link>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <Link className="text-gray-500 transition hover:text-gray-500/75" to="/"> Accueil </Link>
                  </li>

                  <li>
                    <Link className="text-gray-500 transition hover:text-gray-500/75" to="/menu"> Menu</Link>
                  </li>

                  <li>
                    <Link className="text-gray-500 transition hover:text-gray-500/75" to="/history"> History </Link>
                  </li>

                  <li>
                    <Link className="text-gray-500 transition hover:text-gray-500/75" to="/services"> Services </Link>
                  </li>

                  <li>
                    <Link className="text-gray-500 transition hover:text-gray-500/75" to="/projects"> Projects </Link>
                  </li>

                  <li>
                    <Link className="text-gray-500 transition hover:text-gray-500/75" to="/blog"> Blog </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <Link
                  className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-teal-700 focus:outline-none focus:ring active:bg-teal-500"
                  to="/login"
                >
                  Login
                </Link>

                <div className="hidden sm:flex">
                  <Link
                    className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 shadow hover:text-teal-700 focus:outline-none focus:ring active:text-teal-500"
                    to="/register"
                  >
                    Register
                  </Link>
                </div>
              </div>

              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
