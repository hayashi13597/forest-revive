"use client";
import React, { FC, useState } from "react";
interface BlogItemPros {
  title: string;
  trees?: string;
  des: string;
  time: string;
  plant?: string;
}
import "./blog.css";
import moment from "moment";
const BlogItem: FC<BlogItemPros> = ({ title, des, trees, plant, time }) => {
  const [isViewDetail, setIsViewDetail] = useState(false);
  return (
    <div className="w-full text-black">
      <div className="relative bg-white text-base rounded p-4 flex flex-col items-start mt-4">
        <p className="text-lg  font-black text-menu  capitalize text-left">
          {title}
        </p>
        {plant && <p className="text-sm  capitalize">{plant}</p>}
        {trees && (
          <div className="flex justify-between">
            <div className="bg-[#6fba0d] px-2 py-1 rounded-full mt-2">
              <p className="text-white text-bold text-sm uppercase ">
                {trees} trees
              </p>
            </div>
          </div>
        )}
        <p
          className={`mt-4 text-sm text-left ease-in-out duration-300 text_over-effect  ${
            isViewDetail ? "hidden_effect" : " line-clamp-3"
          }`}
        >
          {des}
        </p>
        <p className="mt-2 flex justify-between items-center w-full">
          <button
            onClick={() => setIsViewDetail(!isViewDetail)}
            className="bg-primary/90 py-2 rounded-2xl  px-3 text-[#e6e3e3] text-xs hover:bg-primary"
          >
            {isViewDetail ? "Ẩn bớt" : "Xem thêm"}
          </button>
          {time && (
            <time className="text-xs">
              {" "}
              {moment(new Date(time)).format("DD/MM/YYYY")}
            </time>
          )}
        </p>
      </div>
    </div>
  );
};

export default BlogItem;
