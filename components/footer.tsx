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
              href="https://reddit.com/r/teamtrees"
              target="_blank"
              className="relative"
            >
              <Image
                width={40}
                height={40}
                alt="social"
                src="/images/reddit-icon.png"
                className="mx-2 block w-10 h-10"
              />
            </a>
            <a
              href="https://www.instagram.com/teamtrees/"
              target="_blank"
              className="relative"
            >
              <Image
                width={40}
                height={40}
                alt="social"
                src="/images/instagram-icon.png"
                className="mx-2 block w-10 h-10"
              />
            </a>
            <a
              href="https://twitter.com/teamtreesofficl"
              target="_blank"
              className="relative"
            >
              <Image
                width={40}
                height={40}
                alt="social"
                src="/images/twitter-icon.png"
                className="mx-2 block w-10 h-10"
              />
            </a>
            <a
              href="https://www.facebook.com/teamtreesofficial/"
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
            <a
              href="https://tiktok.com/@teamtreesofficial"
              target="_blank"
              className="relative"
            >
              <Image
                width={40}
                height={40}
                alt="social"
                src="/images/tiktok-icon.png"
                className="mx-2 block w-10 h-10"
              />
            </a>
            <a
              href="https://www.youtube.com/c/teamtrees"
              target="_blank"
              className="relative"
            >
              <Image
                width={40}
                height={40}
                alt="social"
                src="/images/youtube-icon.png"
                className="mx-2 block w-10 h-10"
              />
            </a>
          </div>
          <div className="mt-8 w-full max-w-screen-lg mx-auto">
            <div className="social-wrap px-0 md:px-4 rounded overflow-hidden">
              <div
                className="tintup mx-auto"
                data-id="teamtrees_1"
                data-columns
                data-expand="true"
                data-infinitescroll="true"
                data-personalization-id={1047512}
                style={{
                  height: "40vh",
                  width: "100%",
                  position: "relative",
                }}
                data-finishedloadingmoreposts="false"
              >
                <div
                  className="a5b5e4-inner"
                  style={{ height: "100%", width: "100%", overflow: "hidden" }}
                >
                  <iframe
                    src="https://cdn.hypemarks.com/t/teamtrees_1?width=992&expand=true&infiniteScroll=true&personalization_id=1047512"
                    style={{ border: "none", height: "100%", width: "100%" }}
                    scrolling="yes"
                    title="Social Feed"
                    data-embed-id
                  />
                </div>
              </div>
            </div>
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
              href="mailto:info@teamtrees.org"
              className="block mt-4 md:mt-0 px-4 text-white font-black"
            >
              Contact Us
            </a>
            <a
              href="mailto:press@teamtrees.org"
              className="block mt-4 md:mt-0 px-4 text-white font-black"
            >
              Press Inquiries
            </a>
            <a
              href="https://teamseas.org/"
              target="_blank"
              className="block mt-4 md:mt-0 px-4 text-white font-black"
            >
              #TeamSeas
            </a>
          </div>
        </div>
      </footer>
      <p />
    </div>
  );
};

export default Footer;
