"use client";
import React, { useEffect, useState } from "react";
import BlogItem from "./BlogItem";
import { Skeleton } from "@mui/material";
export interface IlistBlog {
  _id: string;
  title: string;
  description: string;
  time: string;
  address: string;
  createdAt: string;
}
const BlogContainer = () => {
  const [listBlog, setListBolg] = useState<IlistBlog[]>([]);
  useEffect(() => {
    fetch("/api/blog")
      .then((res) => res.json())
      .then((data: IlistBlog[]) => {
        console.log(data);
        setListBolg(data);
      });
  }, []);
  return (
    <>
      <h2 className="text-center font-bold text-2xl sm:text-5xl mb-4">
        TIN TỨC MỚI NHẤT
      </h2>
      <div
        id="planting-projects"
        className="grid sm:grid-cols-2 grid-cols-1 gap-2"
      >
        {listBlog.length > 0 ? (
          listBlog.map((item) => (
            <BlogItem
              key={item._id}
              title={item.title}
              time={item.time || item.createdAt}
              des={item.description}
            />
          ))
        ) : (
          <article className="grid col-span-1 sm:col-span-2 sm:grid-cols-2 grid-cols-1 gap-2">
            <div>
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
              <Skeleton variant="rectangular" height={120} />
              <Skeleton
                variant="text"
                width={80}
                height={60}
                sx={{ fontSize: "1rem" }}
              />
            </div>
            <div>
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
              <Skeleton variant="rectangular" height={120} />
              <Skeleton
                variant="text"
                width={80}
                height={60}
                sx={{ fontSize: "1rem" }}
              />
            </div>
            <div>
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
              <Skeleton variant="rectangular" height={120} />
              <Skeleton
                variant="text"
                width={80}
                height={60}
                sx={{ fontSize: "1rem" }}
              />
            </div>
            <div>
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
              <Skeleton variant="rectangular" height={120} />
              <Skeleton
                variant="text"
                width={80}
                height={60}
                sx={{ fontSize: "1rem" }}
              />
            </div>
          </article>
        )}
      </div>
    </>
  );
};

export default BlogContainer;
