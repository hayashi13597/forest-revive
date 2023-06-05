import React from "react";

const BlogItem = () => {
  return (
    <div className="w-full text-black">
      <div className="relative bg-white text-base rounded p-4 flex flex-col items-start mt-4">
        <p className="text-lg font-black text-menu">
          Arkansas, Louisiana, Mississippi, United States
        </p>
        <p className="text-sm  ">Mississippi River Valley</p>
        <div className="bg-[#6fba0d] px-2 py-1 rounded-full mt-2">
          <p className="text-white text-bold text-sm uppercase">
            1,000,000 trees
          </p>
        </div>
        <p className="mt-4 text-sm text-left">
          The Mississippi Delta was once a 24-million-acre forested wetland.
          Today only 4.4 million forested acres remain, mostly in small patches,
          leading to water quality and habitat issues. Tree planting efforts
          will improve critical habitat for threatened and endangered species
          and protect the water quality of the rivers and streams within the
          delta.
        </p>
      </div>
    </div>
  );
};

export default BlogItem;
