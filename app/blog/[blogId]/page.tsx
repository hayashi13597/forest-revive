"use client";

import React from "react";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";
import Nav from "@/components/admin/Nav";

interface IBlog {
  _id: string;
  title: string;
  description: string;
  time: string;
  address: string;
  createdAt: string;
}

const BlogEdit = () => {
  const [state, setState] = React.useState({
    _id: "",
    title: "",
    description: "",
    time: "",
    address: "",
  });
  const pathname = usePathname();
  const navigate = useRouter();
  React.useEffect(() => {
    const id = pathname.split("/").splice(-1, 1)[0];
    const getData = async () => {
      const res = await axios.get<IBlog[]>("/api/blog", { params: { id } });
      setState({
        _id: id,
        title: res.data[0].title,
        description: res.data[0].description,
        time: res.data[0].time,
        address: res.data[0].address,
      });
    };
    getData();
  }, []);
  const handleChange = (e: any) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await axios.put("/api/blog", state);
    if (res.status === 200) {
      toast.success("Sửa blog thành công!");
      setTimeout(() => navigate.push("/blog"), 1500);
    }
  };

  return (
    <>
      <Toaster />
      <Nav />
      <div className="relative max-w-7xl mx-auto text-left ring-1 bg-white shadow border-blue-500 ring-gray-200 p-6 rounded-lg mt-5">
        <form onSubmit={handleSubmit}>
          <h3 className="mb-6 text-3xl">Sửa blog</h3>
          <div className="mb-6">
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              autoComplete="off"
              onChange={handleChange}
              value={state.title || ""}
              required
            ></input>
          </div>
          <div className="mb-6">
            <label
              htmlFor="time"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              time
            </label>
            <input
              type="text"
              id="time"
              name="time"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              autoComplete="off"
              onChange={handleChange}
              value={state.time || ""}
            ></input>
          </div>
          <div className="mb-6">
            <label
              htmlFor="address"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              autoComplete="off"
              onChange={handleChange}
              value={state.address || ""}
              required
            ></input>
          </div>
          <div className="mb-6">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Description
            </label>
            <textarea
              id="description"
              rows={4}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              name="description"
              onChange={handleChange}
              value={state.description || ""}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          >
            Lưu
          </button>
        </form>
      </div>
    </>
  );
};

export default BlogEdit;
