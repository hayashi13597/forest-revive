"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { BiMenu } from "react-icons/bi";
const Header = () => {
  const menuRef = useRef<HTMLDivElement>(null);

  const handleToggleMenu = () => {
    if (menuRef.current) {
      menuRef.current.classList.toggle("menu__hidden");
    }
  };
  return (
    <header className="static">
      <div
        onClick={handleToggleMenu}
        className="absolute  border border-[#5c5a5a] inline-flex  p-2.5 bg-white hover:bg-primary hover:text-white rounded-full ineline-flex items-center  top-4 right-4  justify-center cursor-pointer"
      >
        <BiMenu className="text-2xl" />
      </div>
      <div
        ref={menuRef}
        onClick={handleToggleMenu}
        style={{ zIndex: 100 }}
        className="fixed menu__hidden right-0 top-0 w-full md:w-1/2 lg:w-1/3 max-w-lg h-full bg-menu x-4 pl-8  transition-all duration-200 transform"
      >
        <div className="absolute inline-flex  py-2.5 px-4 bg-white hover:bg-primary hover:text-white rounded-full ineline-flex items-center  top-4 right-4  justify-center cursor-pointer">
          <span className="text-xl block" aria-hidden="true">
            ×
          </span>
        </div>
        <div className="flex-1 flex flex-col items-start mt-14 ">
          <div className="relative">
            <a
              href="#home"
              className="block text-xl md:text-3xl text-white font-black uppercase"
            >
              Home
            </a>
            <Image
              src="/images/leaf.png"
              width="50"
              height="50"
              alt="Node have"
              className="absolute w-8 top-0 left-0 ml-24 -mt-2"
            />
          </div>
          <a
            href="#section-donate"
            className="block text-xl md:text-3xl text-white font-black uppercase mt-4"
          >
            Join #TeamTrees
          </a>
          <a
            href="#leaderboard"
            className="block text-xl md:text-3xl text-white font-black uppercase mt-4"
          >
            Leaderboard
          </a>
          <a
            href="#social-feed"
            className="block text-xl md:text-3xl text-white font-black uppercase mt-4"
          >
            Social
          </a>
          <a
            href="#planting-projects"
            className="block text-xl md:text-3xl text-white font-black uppercase mt-4"
          >
            Planting Projects
          </a>
          <a
            href="https://shop.teamtrees.org"
            className="block text-xl md:text-3xl text-white font-black uppercase mt-4"
          >
            Store
          </a>
        </div>
        <div className="transform -rotate-6  mt-12 flex flex-col items-center justify-center  w-64">
          <div
            className="bg-primary rounded-full  flex items-center align-center flex-col gap-2 py-3 relative"
            style={{ maxWidth: 240 }}
          >
            <div className="flex flex-wrap  items-center">
              <div className="text-center">
                <Image
                  src="/images/leaf.png"
                  width="50"
                  height="50"
                  alt="Node have"
                  className="absolute w-8 top-0 left-0 ml-24 -mt-2"
                />
              </div>
              <div className="px-4 flex  items-center justify-center ">
                <Image
                  src="/images/trophy-check.png"
                  width="20"
                  height="20"
                  alt="Node have"
                />
                <p className="text-white text-sm">
                  20 million trees are in the ground!
                </p>
              </div>
            </div>
            <div className="bg-second min-w-[150px] px-2 py-1 absolute top-full -translate-y-1/2 -translate-x-1/2 left-3/4  rounded-full  text-right achieve-goal">
              <p className="text-white text-xs uppercase tracking-wider">
                Original Goal Met
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
