"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const Header = () => {
  const totalTrees = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let count = 0;
    const idTimeTerval = setInterval(() => {
      count++;
      if (totalTrees.current) {
        totalTrees.current.textContent = count.toLocaleString("en-vi");
      }
    }, 1000);
    return () => {
      clearInterval(idTimeTerval);
    };
  }, []);
  return (
    <header className="relative text-white  md:mb-[300px]">
      <div className="absolute inset-0 bg-spruce" />
      <div
        className="absolute  inset-0"
        style={{ backgroundImage: 'url("/images/stars.png")' }}
      />
      <div className="absolute  inset-0 bg-gradient-to-b from-transparent to-sky" />
      <div className="relative  pb-24 md:pb-48">
        <div className="bg-[#B4DBE1] text-[#0B447D] py-4 px-2 w-full flex flex-col md:flex-row items-center justify-center">
          <p className="text-spruce text-center font-bold text-sm">
            Chung tay gây quỹ trồng 20.000 cây xanh đô thị chống biến đổi khí
            hậu và hạn chế ô nhiễm môi trường đồng hành cùng
            <a
              href="https://www.arborday.org/"
              className="font-black underline ml-2 inline-block"
              target="_blank"
            >
              GreentViet
            </a>
            .
          </p>
        </div>
        <div className="flex flex-col h-full items-center justify-center pt-4 md:pt-16">
          <div className="flex flex-row justify-around w-full px-4">
            <div className="w-12 h-12 " />
            <div
              id="hero-logo"
              className="flex-1 flex items-center justify-center mr-12"
            >
              <Image
                alt="avata"
                width={300}
                height={75}
                src="/images/logologo.png"
                className="h-8 md:h-20"
              />
            </div>
          </div>
          <h1 className="mt-12 text-5xl lg:text-5xl text-primary font-black uppercase text-center leading-2">
            TÔN VINH MÔI TRƯỜNG
            <br />
            BẰNG CÂY XANH
          </h1>
          <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start w-full max-w-screen-xl">
            <div className="flex-1 items-start justify-start">
              <div className="transform -rotate-6 my-8 mb-4 lg:my-0 lg:mb-0 max-w-xs pl-12 pb-6">
                <Image
                  alt="test"
                  width={100}
                  height={100}
                  src="/images/astronaut-heart-trees.png"
                  className="absolute left-0 -ml-4 xl:-ml-8 top-0 w-16 xl:w-24 object-contain"
                />
                <div className="relative mx-auto w-64 xl:w-auto">
                  <Image
                    alt="test"
                    width={140}
                    height={140}
                    src="/images/bg-logo_people.png"
                    className="w-56 xl:w-auto md:pl-6 md:pr-6 mx-auto"
                  />
                  <div className="absolute top-[148px] bg-primary rounded-full py-2 px-4 items-center">
                    <div className="flex gap-2">
                      <Image
                        src="/images/trophy-check-animated.gif"
                        width={40}
                        height={45}
                        alt="gif"
                      />
                      <p className="text-sm">400 cây xanh sẽ được trồng!</p>
                    </div>
                    <p className="absolute right-0  top-5/6 bg-second rounded-full py-1 px-3 text-sm">
                      Mục tiêu tương lai
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p
              className="mt-4 px-4 text-white font-medium max-w-xl text-center text-sm md:text-lg lg:text-xl  md:mt-8"
              style={{ flex: 2 }}
            >
              Phá vỡ vòng luẩn quẩn đói nghèo và tàn phá môi trường. Với sự giúp
              đỡ của bạn Yêu Cây Vì Tương Lai Tươi Sáng
              <br />
              <br />
              Yêu Cây Vì Tương Lai Tươi Sáng
            </p>
            <div className="flex-1 hidden md:block" />
          </div>

          <h2
            ref={totalTrees}
            data-count={24419894}
            className="counter text-6xl sm:text-8xl lg:text-hero font-black pb-24 md:pb-0"
          >
            0
          </h2>
        </div>
      </div>
      <Image
        width={1400}
        height={400}
        alt="big-header"
        src="/images/header.png"
        className=" block min-h-[400px]    absolute bottom-0 left-0 right-0 top-[90%]  w-screen  z-10 -mt-40"
      />
    </header>
  );
};

export default Header;
