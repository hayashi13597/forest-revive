"use client";

import Nav from "@/components/admin/Nav";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";

interface IUsers {
  _id: string;
  fullname: string;
  email: string;
  amount: number;
  message: string;
}

const Dashboard = () => {
  const [users, setUsers] = useState<IUsers[]>();
  const navigate = useRouter();
  if (typeof window !== "undefined") {
    const userInfo = localStorage.getItem("access");
    if (userInfo !== "Admin") {
      navigate.push("/login");
    }
  }
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);
  const handleDelete = async (id: string) => {
    const res = await axios.delete("/api", { params: { id } });
    toast.success(res.data);
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Toaster />
      <Nav />
      <main className="p-4 md:p-10 mx-auto max-w-7xl">
        <p className="text-gray-700 text-2xl font-medium">Users</p>
        <p className="text-gray-500 text-sm font-normal">
          A list of users retrieved from a MONGODB database
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
                      Full Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Amount
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Message
                    </th>
                    <th className="sr-only">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users &&
                    users.map((item) => (
                      <tr
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        key={item._id}
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {item.fullname}
                        </th>
                        <td className="px-6 py-4">{item.email}</td>
                        <td className="px-6 py-4">{item.amount}</td>
                        <td className="px-6 py-4">{item.message}</td>
                        <td>
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
      </main>
    </>
  );
};

export default Dashboard;
