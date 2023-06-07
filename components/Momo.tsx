import { IUserDonation } from "@/app/page";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";

const Momo = () => {
  const [listDonation, setListDonations] = useState<IUserDonation[]>([]);
  const Sum = useMemo(() => {
    return listDonation.reduce(
      (acc, item) => {
        acc.totalMoney += Number(item.totalPrice)* 23 * Number(item.amount);
        acc.totalTrees += Number(item.amount);
        return acc;
      },
      { totalMoney: 0, totalTrees: 0 }
    );
  }, [listDonation]);

  useEffect(() => {
    (async () => {
      const res = await fetch("/api");
      const data = await res.json();

      setListDonations(data);
    })();
  }, []);
  return (
    <div id="top-up" className="flex justify-center text-white">
      <div className="w-[587px]  text-base pt-14 pb-4 px-8 text-left">
        <section>
          <h2 className="text-3xl mb-4 text-center ">Thông tin quyên góp</h2>

          <p className="text-sm text-center text-gray-400">
            {Sum.totalMoney.toFixed(0)},000 đ/ 2.000.000đ
          </p>
          <div className="w-full bg-gray-200 rounded-full dark:bg-gratext-gray-400">
            <div
              className="bg-momo text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
              style={{ width: `${(Sum.totalMoney * 100) / 2000}%` }}
            >
              {((Sum.totalMoney * 100) / 2000).toFixed(2)}.%
            </div>
          </div>
          <div className="grid grid-cols-3 text-center my-4">
            <div>
              <p className=" text-gray-400">Lượt quyên góp</p>
              <p>{listDonation.length}</p>
            </div>
            <div>
              <p className=" text-gray-400">Đạt được </p>
              <p>{Sum.totalTrees}</p>
            </div>
            <div>
              <p className=" text-gray-400">Thời hạn</p>
              <p>30</p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button className="py-2 w-1/2 bg-momo text-white text-bold my-4 rounded-full">
              Quyên góp
            </button>
          </div>
          <hr className="h-2 bg-gray-600 " />
          <p className="mt-8 text-center">Đồng hành cùng dự án</p>
          <div className="flex items-center justify-center  gap-2">
            <Image
              src="/images/greenviet.png"
              width={85}
              height={45}
              className="object-cover"
              alt="test"
            />
            <span className="text-gray-400">GreenViet</span>
          </div>
        </section>
        <div className="relative mb-[300px]">
          <Image
            src="/images/momo.png"
            width={759}
            height={454}
            alt="momo"
            className="mt-2 w-full object-cover absolute inset-0"
          />
          <div className="absolute  right-12 top-16">
            <div className="w-[195px] h-[188px] bg-red-600">
              <Image
                src="/images/anhmomo.png"
                alt="dasdsa"
                width={195}
                height={188}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Momo;
