"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const Nav = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const pathname = usePathname();
  const router = useRouter();
  const userInfo = localStorage.getItem("access");
  const handleClick = () => {
    setToggle(!toggle);
  };
  const handleSignOut = () => {
    localStorage.removeItem("access");
    router.refresh();
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex flex-shrink-0 items-center">
              <Image
                src={"/images/tree-group.png"}
                width={40}
                height={40}
                alt="Logo"
                style={{ width: "auto", height: "auto" }}
              ></Image>
            </div>
            <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href={"/dashboard"}
                className={`${
                  pathname == "/dashboard"
                    ? "border-slate-500 text-gray-900"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                Dash Board
              </Link>
              <Link
                href={"/playground"}
                className={`${
                  pathname == "/playground"
                    ? "border-slate-500 text-gray-900"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                Playground
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <div className="relative ml-3">
              <div>
                <button
                  className="flex rounded-full bg-white text-sm font-bold ring-1 p-2"
                  onClick={handleClick}
                >
                  {userInfo}
                </button>
              </div>
              <div
                className={`absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transform opacity-0 scale-0 ${
                  toggle ? "ease-out duration-200 !opacity-100 !scale-100" : ""
                } hover:bg-slate-200`}
              >
                <button
                  className="flex w-full px-4 py-2 text-sm text-gray-700"
                  onClick={handleSignOut}
                >
                  Sign out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
