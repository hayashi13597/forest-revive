import { IUserDonation } from "@/app/page";
import Image from "next/image";
import React from "react";
import monent from "moment";
interface UserDonationProps {
  user: IUserDonation;
}
const UserDonation: React.FC<UserDonationProps> = ({ user }) => {
  return (
    <div className="w-full bg-white shadow  rounded-md relative mt-4 flex flex-row isGift">
      <div className="relative md:absolute top-0 bottom-0 left-0 flex py-4 items-start md:items-center justify-center ml-4 md:-ml-8">
        <Image
          width={40}
          height={40}
          alt="avata"
          src="/images/icon-badge-branch-2.svg"
          className="w-12 md:h-16 md:w-16 rounded-full"
        />
      </div>
      <div className="w-full flex flex-col md:flex-row items-start md:items-center pl-4 md:pl-12 py-2">
        <div className="flex-1">
          <p className="text-gray-800 font-black text-lg capitalize">
            {user.fullname}
          </p>
          <p className="text-gray-800">{user.message}</p>
        </div>
        <div className="flex flex-col items-start md:items-end pr-4">
          <div className="mt-0 md:mt-4 bg-primary rounded-full text-white text-bold px-4 relative badge">
            {user.amount} cây
          </div>
          <p className="text-center text-xs mt-2 opacity-50 feed-datetime">
            {monent(user.createdAt).format("HH:mm:ss - DD/MM/YYYY")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserDonation;
