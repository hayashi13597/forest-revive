import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div id="social-feed">
        <div className="bg-spruce py-32">
          <h3 className="text-white text-3xl md:text-6xl font-black text-center uppercase">
            #TeamTKWEB Builder
          </h3>
          <div className="flex flex-row items-center mt-4 justify-center">
            <a
              href="https://www.facebook.com/profile.php?id=100093135552925"
              target="_blank"
              className="relative"
            >
              <Image
                width={40}
                height={40}
                alt="social"
                src="/images/facebook-icon.png"
                className="mx-2 block w-10 h-10"
              />
            </a>
          </div>
        </div>
      </div>

      <footer className="bg-gradient-to-b from-spruce to-sky text-base">
        <div className="pt-30">
          <Image
            width={1320}
            height={40}
            alt="footer"
            src="/images/footer.png"
            className="w-full object-cover"
          />
          <div className="bg-spruce flex flex-col md:flex-row items-center justify-center p-4 md:p-8 -mt-1 ">
            <a
              href="/#FAQ"
              data-toggle="modal"
              data-target="#FAQ"
              className="cursor-pointer block mt-4 md:mt-0 px-4 text-white font-black"
            >
              FAQ
            </a>
            <a
              href="mailto:nguyenvantruonghh0405@gmail.com"
              className="block mt-4 md:mt-0 px-4 text-white font-black"
            >
              Liên hệ
            </a>
            <a
              href="mailto:nguyenvantruonghh0405@gmail.com"
              className="block mt-4 md:mt-0 px-4 text-white font-black"
            >
              Yêu cầu báo chí
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100093135552925"
              target="_blank"
              className="block mt-4 md:mt-0 px-4 text-white font-black"
            >
              #TeamTKWEB
            </a>
          </div>
        </div>
      </footer>
      <p />
    </div>
  );
};

export default Footer;
