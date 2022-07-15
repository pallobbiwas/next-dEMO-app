import Link from "next/link";
import React from "react";

function Header({ children }) {
  return (
    <div>
      <div className="drawer drawer-end">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="w-full navbar bg-base-300">
            <div className="flex-1 px-2 mx-2">
              <p className="text-2xl font-bold">
                <span className="text-5xl text-pink-600">d</span>EMO
              </p>
            </div>
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>

            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                <li className="font-bold">
                  <Link href="/home">
                    <a className="rounded-lg">About</a>
                  </Link>
                </li>
                <li className="font-bold">
                  <Link href="/about">
                    <a className="rounded-lg">About</a>
                  </Link>
                </li>
                <li className="font-bold">
                  <a className="rounded-lg">Team</a>
                </li>
                <li className="font-bold">
                  <a className="rounded-lg">Features</a>
                </li>
                <li className="font-bold">
                  <a className="rounded-lg">Contact</a>
                </li>
                <li className="ml-32">
                  <button className="btn btn-accent border-none bg-pink-600 text-white rounded-full px-5">
                    Contant Now
                  </button>
                </li>
              </ul>
            </div>
          </div>
          {children}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
            <li>
              <Link href="/home">Home</Link>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Team</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <li>
              <button>Contant Now</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
