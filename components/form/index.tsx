"use client";
import React, { Dispatch, FC, useState } from "react";
import PayPalContainer from "./PayPal";
import toast from "react-hot-toast";
import { IUserDonation } from "@/app/page";
import { Backdrop, BackdropRoot, CircularProgress } from "@mui/material";
export interface TypeAccount {
  totalPrice: string;
  email: string;
  fullname: string;
}
interface FormControllerProps {
  dispatch: Dispatch<{
    type: string;
    payload: IUserDonation;
  }>;
}
const FormController: FC<FormControllerProps> = ({ dispatch }) => {
  const [amount, setAmount] = useState<string>("5");
  const [message, setMessage] = useState<string>("");
  const [isShowaypal, setIsShowPayMent] = useState<boolean>(false);
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [errors, setErrors] = useState<string>("");
  const handleSubmit = () => {
    const regex = /^[0-9]+$/;
    if (regex.test(amount)) {
      console.log(amount, message);
      setIsShowPayMent(true);
      setErrors("");
    } else {
      setIsShowPayMent(false);
      setErrors("Vui lòng đúng định dạng");
    }
  };
  const hanleInfopmation = async (account: TypeAccount) => {
    setIsloading(true);
    const InfoDonate = {
      ...account,
      amount,
      message: message || "Ủng hộ cho team TKW",
    };

    // gửi dữ liệu để nạp
    fetch("/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(InfoDonate),
    })
      .then((res) => res.json())
      .then((data) => {
        setAmount("");
        setMessage("");
        setIsShowPayMent(false);
        dispatch({ type: "add", payload: data });
        console.log(data);
        toast.success("Thanh toán thành công!");
      })
      .finally(() => {
        setIsloading(false);
      });
  };
  return (
    <section className="z-[999] relative text-center flex items-center w-full ">
      <form
        className="w-[336px] m-auto bg-white shadow-lg rounded-2xl py-4 text-base"
        action=""
      >
        {isLoading && (
          <div className="fixed flex justify-center items-center inset-0 z[9999] bg-black/80">
            <CircularProgress />
          </div>
        )}
        <h2 className="text-menu text-3xl font-bold  ">JOIN #TKWEB!</h2>
        <p className="text-lg font-bold text-[#11327E]">5000đ/1 cây xanh</p>

        <div className="grid grid-cols-2 gap-4 px-4 mt-12">
          <button
            type="button"
            onClick={() => setAmount("5")}
            className={`bg-[#EDF2F7]  py-4 w-full rounded-xl ${
              amount == "5" ? "bg-menu text-white" : "bf-[#eff2f7"
            }`}
          >
            5 cây
          </button>
          <button
            type="button"
            onClick={() => setAmount("10")}
            className={`bg-[#EDF2F7]  py-4 w-full rounded-xl ${
              amount == "10" ? "bg-menu text-white" : "bf-[#eff2f7"
            }`}
          >
            10 cây
          </button>
          <button
            type="button"
            onClick={() => setAmount("15")}
            className={`bg-[#EDF2F7]  py-4 w-full rounded-xl ${
              amount == "15" ? "bg-menu text-white" : "bf-[#eff2f7"
            }`}
          >
            15 cây
          </button>
          <button
            type="button"
            onClick={() => setAmount("20")}
            className={`bg-[#EDF2F7]  py-4 w-full rounded-xl ${
              amount == "20" ? "bg-menu text-white" : "bf-[#eff2f7"
            }`}
          >
            20 cây
          </button>
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="col-span-2 bg-[#EDF2F7] py-2   w-full  px-4 focus-within:bg-menu focus-within:text-white rounded-xl border"
            placeholder="Nhập số cây khác"
          />
          <p className="text-red-500 col-span-2">{errors}</p>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="col-span-2 bg-[#EDF2F7] py-4 w-full  focus-within:bg-menu focus-within:text-white px-4 rounded-xl border"
            placeholder="Lời nhắn ..."
            rows={2}
          ></textarea>
        </div>
        <hr className="my-4 h-1" />
        {!isShowaypal && (
          <button
            type="button"
            onClick={handleSubmit}
            className="col-span-2 bg-[#DC582A] px-4 py-2 w-[60%] rounded-full mt-4  text-white hover:opacity-80 text-lg font-semibold"
          >
            Next
          </button>
        )}
        {isShowaypal && amount && (
          <PayPalContainer
            amount={Number(amount)}
            callback={hanleInfopmation}
          />
        )}
      </form>
    </section>
  );
};

export default FormController;
