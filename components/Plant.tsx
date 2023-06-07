import Image from "next/image";
import React, { Suspense } from "react";
import dymamic from "next/dynamic";

const LoadMap: any = dymamic(() => import("./LoadMap"), { ssr: false });
import BlogContainer from "./blog";

const Plant = () => {
  return (
    <section className="mt-[100px] text-white text-center ">
      <div className="px-20">
        <h2 className="font-bold sm:text-5xl text-2xl">
          Dự án trồng cây xanh bảo vệ môi trường
        </h2>
        <p className="text-lg mt-8">
          Hàng ngàn cây này được trồng ở đâu? Trên toàn nước ta, nhờ sự hợp tác
          của chúng tôi với GreenViet!
        </p>
        <p className="flex justify-center mt-8">
          <Image
            width={200}
            height={40}
            className="object-cover "
            alt="treee"
            src="/images/greenviet.png"
          />
        </p>
      </div>
      <div className="max-w-screen-sm mx-auto px-3 md:px-4 mt-12 text-left">
        <div className="bg-[#3D6248] rounded-3xl px-4 md:px-10 py-4 mt-4">
          <div className="flex flex-wrap">
            <div className="w-1/3 md:w-1/4 text-center">
              <Image
                width={300}
                height={200}
                alt="dsadsa"
                src="/images/tree-group-alt.png"
                className="inline-block -mt-8 md:-mt-12 md:px-3"
              />
            </div>
            <div className="w-2/3 md:w-3/4 pl-2 md:pl-4">
              <h2 className="font-black text-white text-lg md:text-2xl mt-3 md:mt-0 tracking-wide">
                Khôi phục nguồn rừng
              </h2>
              <div className="bg-black bg-opacity-25 rounded-full px-2 py-1 inline-block">
                <p className="text-white text-xxs md:text-xs uppercase tracking md:tracking-widest">
                  200 cây+ / 400 cây
                </p>
              </div>
            </div>
          </div>
          <div className="px-4 mt-3 md:mt-5">
            <Image
              width={500}
              height={100}
              alt="Hello"
              src="/images/tree-progress-20-of-24-mil-large-screens.png"
              className="hidden md:block"
            />
            <Image
              width={500}
              height={100}
              alt="Hello"
              src="/images/tree-progress-20-of-24-mil-small-screens.png"
              className="block md:hidden pr-8"
            />
            <p>
              <a
                style={{ borderBottom: "1px solid #fff", paddingBottom: 3 }}
                href="#planting-locations"
                className="mt-4 mb-2 text-white text-xs md:text-sm inline-block"
              >
                Check out our updated planting locations{" "}
                <Image
                  width={500}
                  height={100}
                  alt="Hello"
                  src="/images/arrow-right-light.png"
                  className="w-4 inline-block"
                />
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center w-screen mt-10">
        <div className="w-[200px] relative bg-primary rounded-full py-2 px-4 items-center">
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
      <div className=" mt-20  flex justify-center">
        <Suspense fallback="..">
          <LoadMap />
        </Suspense>
      </div>
      <div className="flex justify-center mt-20">
        <div className="w-[70%]">
          <BlogContainer />
        </div>
      </div>
    </section>
  );
};

export default Plant;
