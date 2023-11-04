import React, { useState } from "react";
import { Link, useLocation, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/authSlice";
import { MdLogout, MdPerson } from "react-icons/md";
import HomeRoutes from "../components/HomeRoutes";
import "flowbite/dist/flowbite.min.js";

const Home = () => {
  const [redirect, setRedirect] = useState(false);
  const location = useLocation();

  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);
  console.log(user);

  const handleLogout = async () => {
    dispatch(logout());
    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  if (user == null) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="bg-[#181b5f]">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between text-white mx-auto p-4">
          <div className="flex items-center">
            <h2 className="font-bold text-xl">FITSTER</h2>
          </div>
          <button
            data-collapse-toggle="navbar-multi-level"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-multi-level"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>

          <div
            className="z-50 hidden my-4 text-base list-none divide-y  rounded shadow bg-zinc-700 divide-zinc-600"
            id="dropdown-user"
          >
            <div className="px-4 py-3" role="none">
              <p className="text-sm text-white" role="none">
                {user.name}
              </p>
              <p
                className="text-sm font-medium  truncate text-zinc-300"
                role="none"
              >
                {user.email}
              </p>
            </div>
            <ul className="py-1" role="none">
              <li>
                <a
                  href="/home/dashboard"
                  className="block px-4 py-2 text-sm  text-zinc-300 hover:bg-zinc-600 hover:text-white"
                  role="menuitem"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="block px-4 py-2 text-sm  text-zinc-300 hover:bg-zinc-600 hover:text-white"
                  role="menuitem"
                >
                  Sign out
                </button>
              </li>
            </ul>
          </div>
          <div
            className="hidden w-full lg:block lg:w-auto"
            id="navbar-multi-level"
          >
            <ul className="flex flex-col text-sm lg:items-center p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-4 xl:space-x-6 lg:mt-0 lg:border-0 lg:bg-transparent ">
              <li>
                <Link
                  to="/home"
                  className={`block py-2 pl-3 pr-4 text-black lg:text-white rounded lg:bg-transparent lg:p-0 ${
                    location.pathname === "/home" ||
                    location.pathname === "/home/nuevo-producto" ||
                    location.pathname === "/home/editar-producto"
                      ? "font-bold"
                      : " font-normal"
                  }`}
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/home/inventory"
                  className={`block py-2 pl-3 pr-4 text-black lg:text-white rounded lg:bg-transparent lg:p-0 ${
                    location.pathname.startsWith("/home/inventory")
                      ? "font-bold"
                      : " font-normal"
                  }`}
                  aria-current="page"
                >
                  Inventory
                </Link>
              </li>
              <li>
                <Link
                  to="/home/resources"
                  className={`block py-2 pl-3 pr-4 text-black lg:text-white rounded lg:bg-transparent lg:p-0 ${
                    location.pathname.startsWith("/home/resources")
                      ? "font-bold"
                      : " font-normal"
                  }`}
                  aria-current="page"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  to="/home/contact"
                  className={`block py-2 pl-3 pr-4 text-black lg:text-white rounded lg:bg-transparent lg:p-0 ${
                    location.pathname.startsWith("/home/contact")
                      ? "font-bold"
                      : " font-normal"
                  }`}
                  aria-current="page"
                >
                  Contact
                </Link>
              </li>
              <div>
                <button
                  className="flex lg:hidden items-center mt-3 bg-zinc-200 hover:bg-zinc-300 text-black  font-semibold px-3 py-2 rounded"
                  onClick={handleLogout}
                >
                  Sign out
                </button>
              </div>
            </ul>
          </div>

          <div className="hidden lg:flex items-center">
            <div className="flex items-center">
              <div className="flex items-center ml-3">
                <div className="flex">
                  <button
                    type="button"
                    className="flex text-sm bg-white rounded-full focus:ring-4  focus:ring-zinc-600"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user1"
                  >
                    <span className="sr-only">Open user menu</span>
                    <MdPerson className="text-black h-6 w-6" />
                  </button>
                </div>
                <div
                  className="z-50 hidden my-4 text-base list-none divide-y  rounded shadow bg-zinc-700 divide-zinc-600"
                  id="dropdown-user1"
                >
                  <div className="px-4 py-3" role="none">
                    <p className="text-sm text-white font-bold" role="none">
                      {user.name}
                    </p>
                    <p
                      className="text-sm font-medium  truncate text-zinc-300"
                      role="none"
                    >
                      {user.email}
                    </p>
                  </div>
                  <ul className="py-1" role="none">
                    <li>
                      <a
                        href="/home"
                        className="block px-4 py-2 text-sm  text-zinc-300 hover:bg-zinc-600 hover:text-white"
                        role="menuitem"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <button
                        onClick={handleLogout}
                        className="flex items-center w-full px-4 py-2 text-sm  text-zinc-300 hover:bg-zinc-600 hover:text-white"
                        role="menuitem"
                      >
                        <MdLogout className="h-4 w-4 mr-2" />
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <h2 className="font-bold p-3">{user.name}</h2>
            </div>
          </div>
        </div>
      </nav>

      <main className="mx-auto px-4 py-8 bg-zinc-300">
        <HomeRoutes />
      </main>

      <footer>
        <div className="mx-auto w-full max-w-screen-xl px-8 py-6 lg:py-8 lg:px-16">
          <div className="flex flex-col md:grid md:grid-cols-3 md:gap-16 lg:gap-20 xl:gap-40 md:justify-between">
            <div className="my-6 flex flex-col items-start">
              <h2 className="font-bold text-lg lg:text-3xl mb-4">FITSTER</h2>
              <ul className="font-light w-full">
                <li className="mb-2">
                  <label>Universidad Peruana de Ciencias Aplicadas</label>
                </li>
                <li className="mb-2 items-center">
                  <label>Lima, Perú</label>
                </li>
              </ul>
            </div>
            <div className="my-6 flex flex-col items-start">
              <h2 className="font-semibold text-lg mb-4">Links</h2>
              <ul className="font-light w-full">
                <li className="mb-2">
                  <Link
                    href="/home"
                    className="hover:underline"
                  >
                    Home
                  </Link>
                </li>
                <li className="mb-2 items-center">
                  <Link
                    href="/home/inventory"
                    className="hover:underline"
                  >
                    Inventory
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/home/resources"
                    className="hover:underline"
                  >
                    Resources
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/home/contact"
                    className="hover:underline"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="my-6 flex flex-col items-start">
              <h2 className="font-semibold text-lg mb-4">Help</h2>
              <ul className="font-light w-full">
                <li className="mb-2">
                  <Link
                    href="/home/returns"
                    className="hover:underline"
                  >
                    Returns
                  </Link>
                </li>
                <li className="mb-2 items-center">
                  <Link
                    href="/home/privacy-policies"
                    className="hover:underline"
                  >
                    Privacy Policies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700" />
          <span className="block text-sm text-gray-500 sm:text-center lg:text-start dark:text-gray-400">
            © 2023{" "}
            <a href="" className="hover:underline">
              FITSTER
            </a>{" "}
            All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Home;
