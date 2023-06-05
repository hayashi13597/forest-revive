import React, { FC } from "react";
interface BlogItemPros {
  title: string;
  trees?: string;
  des: string;
  plant?: string;
}
const BlogItem: FC<BlogItemPros> = ({ title, des, trees, plant }) => {
  return (
    <div className="w-full text-black">
      <div className="relative bg-white text-base rounded p-4 flex flex-col items-start mt-4">
        <p className="text-lg font-black text-menu">{title}</p>
        {plant && <p className="text-sm  ">{plant}</p>}
        {trees && (
          <div className="bg-[#6fba0d] px-2 py-1 rounded-full mt-2">
            <p className="text-white text-bold text-sm uppercase">
              {trees} trees
            </p>
          </div>
        )}
        <p className="mt-4 text-sm text-left">{des}</p>
      </div>
    </div>
  );
};

export default BlogItem;
