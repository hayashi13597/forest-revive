"use client";

import Nav from "@/components/admin/Nav";
import React from "react";
import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import moment, { isDate } from "moment";
import Link from "next/link";
import axios from "axios";

interface IBlog {
  _id: string;
  title: string;
  description: string;
  time: string;
  address: string;
  createdAt: string;
}

const Blog = () => {
  const [blogs, setBlogs] = React.useState<IBlog[]>();
  const [state, setState] = React.useState({
    title: "",
    description: "",
    time: "",
    address: "",
  });
  const navigate = useRouter();
  if (typeof window !== "undefined") {
    const userInfo = localStorage.getItem("access");
    if (userInfo !== "Admin") {
      navigate.push("/login");
    }
  }
  React.useEffect(() => {
    fetch("/api/blog")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.log(err));
  }, []);
  const handleChange = (e: any) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    fetch("/api/blog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(state),
    })
      .then((res) => res.json())
      .then(() => {
        setState({
          title: "",
          description: "",
          time: "",
          address: "",
        });
        toast.success("Thêm blog thành công!");
        fetch("/api/blog")
          .then((res) => res.json())
          .then((data) => setBlogs(data))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };
  const handleDelete = async (id: string) => {
    const res = await axios.delete("/api/blog", { params: { id } });
    toast.success(res.data);
    fetch("/api/blog")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Toaster />
      <Nav />
      <main className="p-4 md:p-10 mx-auto max-w-screen-xl">
        <p className="text-gray-700 text-2xl font-medium">Blogs</p>
        <p className="text-gray-500 text-sm font-normal">
          A list of blogs retrieved from a MONGODB database
        </p>
        <div className="relative mt-5 max-w-md">
          <label className="sr-only">Search</label>
          <div className="rounded-md shadow-sm">
            <div
              className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
              aria-hidden="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="mr-3 h-4 w-4 text-gray-400"
              >
                <path
                  fillRule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="search"
              className="h-10 block w-full rounded-md border border-gray-200 pl-9 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Search by name..."
              spellCheck="false"
              name="search"
            ></input>
          </div>
        </div>
        <div className="relative w-full text-left ring-1 bg-white shadow border-blue-500 ring-gray-200 p-6 rounded-lg mt-6">
          <div className="overflow-auto">
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Title
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Description
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Time
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Address
                    </th>
                    <th className="sr-only">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {blogs &&
                    blogs.map((item) => (
                      <tr
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        key={item._id}
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900  dark:text-white"
                        >
                          <div className="min-w-[150px] capitalize max-w-[200px]">
                            {" "}
                            {item.title}
                          </div>
                        </th>
                        <td className="px-6 py-4">{item.description}</td>
                        <td className="px-6 py-4">
                          {moment(item.createdAt).format("DD/MM/yyyy") ||
                            moment().format("DD/MM/yyyy")}
                        </td>
                        <td className="px-6 py-4">{item.address}</td>
                        <td className="flex flex-col justify-center">
                          <Link
                            href={`/blog/${item._id}`}
                            className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                          >
                            update
                          </Link>
                          <button
                            type="button"
                            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                            onClick={() => handleDelete(item._id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="relative w-full text-left ring-1 bg-white shadow border-blue-500 ring-gray-200 p-6 rounded-lg mt-5">
          <form onSubmit={handleSubmit}>
            <h3 className="mb-6 text-3xl">Thêm blog</h3>
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
                value={state.title}
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
                value={state.time}
                required
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
                value={state.address}
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
                value={state.description}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
            >
              Thêm
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default Blog;
