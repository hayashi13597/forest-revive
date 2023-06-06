"use client";

import Nav from "@/components/admin/Nav";
import { useRouter } from "next/navigation";
import React from "react";
import toast, { Toaster } from "react-hot-toast";

const Playground = () => {
  const [total, setTotal] = React.useState({ quantity: 0, total: 0 });
  const [state, setState] = React.useState({
    fullname: "",
    email: "",
    amount: 0,
    message: "Ủng hộ dự án",
    totalPrice: 0,
  });
  const navigate = useRouter();
  if (typeof window !== "undefined") {
    const userInfo = localStorage.getItem("access");
    if (userInfo !== "Admin") {
      navigate.push("/login");
    }
  }
  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        let amount = 0;
        let total = 0;
        data.forEach((item: any) => {
          amount += item.amount;
          total += item.totalPrice;
        });
        setTotal({ quantity: amount, total: +total.toFixed(2) });
      });
  }, []);
  const handleChange = (e: any) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    state.totalPrice = Number(((5 * state.amount) / 23).toFixed(2));
    fetch("/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(state),
    })
      .then((res) => res.json())
      .then((data) => {
        setState({
          fullname: "",
          email: "",
          amount: 0,
          message: "",
          totalPrice: 0,
        });
        toast.success("Thêm thành công thành công!");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Toaster />
      <Nav />
      <main className="p-4 md:p-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-6">
          <div className="relative w-full text-left ring-1 bg-white shadow border-blue-500 ring-gray-200 p-6 rounded-lg">
            <div className="flex w-full flex-row justify-between items-start">
              <p className="text-gray-500 text-sm font-normal">Số cây</p>
            </div>
            <div className="text-gray-700 text-3xl font-semibold">
              {total.quantity}
            </div>
          </div>
          <div className="relative w-full text-left ring-1 bg-white shadow border-blue-500 ring-gray-200 p-6 rounded-lg">
            <div className="flex w-full flex-row justify-between items-start">
              <p className="text-gray-500 text-sm font-normal">Tổng tiền</p>
            </div>
            <div className="text-gray-700 text-3xl font-semibold">
              {Intl.NumberFormat("en-US").format(total.total * 23000)}đ
            </div>
          </div>
        </div>
        <div className="relative w-full text-left ring-1 bg-white shadow border-blue-500 ring-gray-200 p-6 rounded-lg mt-5">
          <form onSubmit={handleSubmit}>
            <h3 className="mb-6 text-3xl">Thêm người ủng hộ</h3>
            <div className="mb-6">
              <label
                htmlFor="fullName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Fullname
              </label>
              <input
                type="text"
                id="fullName"
                name="fullname"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                autoComplete="off"
                placeholder="Nguyễn Văn xxx"
                onChange={handleChange}
                value={state.fullname}
              ></input>
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                autoComplete="off"
                placeholder="nguyenvan@gmail.com"
                onChange={handleChange}
                value={state.email}
              ></input>
            </div>
            <div className="mb-6">
              <label
                htmlFor="amount"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Số lượng
              </label>
              <input
                type="number"
                id="amount"
                name="amount"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                autoComplete="off"
                placeholder="5"
                onChange={handleChange}
                value={state.amount}
              ></input>
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Tin nhắn
              </label>
              <textarea
                id="message"
                rows={4}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Comment"
                name="message"
                onChange={handleChange}
                value={state.message}
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

export default Playground;
