"use client";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { FC, useState } from "react";
import { TypeAccount } from ".";
import Image from "next/image";

interface PayPalContainerProps {
  amount: number;
  callback: (account: TypeAccount) => {};
}

const PayPalContainer: FC<PayPalContainerProps> = ({ amount, callback }) => {
  const [showZalo, setShowZalo] = useState<boolean>(false);
  let totalPrice = ((5 * amount) / 23).toFixed(2);
  const createOrder = (data: any, actions: any) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: totalPrice,
          },
        },
      ],
    });
  };

  const showZaloFn = (e: any) => {
    e.preventDefault();
    setShowZalo(!showZalo);
  };

  const onApprove = (data: any, actions: any) => {
    return actions.order.capture().then(function (details: any) {
      const info: {
        payer_id: string;
        email_address: string;
        name: { surname: string; middle_name: string; given_name: string };
      } = details.payer;
      const account = {
        totalPrice,
        email: info.email_address,
        fullname: `${info.name.surname}  ${info.name.middle_name || ""} ${
          info.name.given_name
        } `.toLowerCase(),
      };
      callback(account);
    });
  };

  const ZaloModal = () => {
    return (
      <div className="fixed inset-0 !z-[9999] bg-[rgba(17,50,89,0.6)] text-white flex items-center justify-center px-8 md:px-0">
        <div className="relative">
          <Image
            src="/images/zalopay.jpg"
            width={400}
            height={800}
            className="object-cover"
            alt="zalopay"
          />
          <button
            className="absolute -top-5 -right-3 text-2xl bg-[rgb(15,30,49)] w-10 h-10 rounded-full hover:bg-[rgb(17,50,89)]"
            onClick={showZaloFn}
          >
            X
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <a
        href="#payment_momo"
        className="block py-2 w-full bg-momo hover:opacity-90 text-white text-bold my-4 rounded"
      >
        Momo
      </a>
      {showZalo && <ZaloModal />}
      <button
        className="block py-2 w-full bg-blue-500 hover:opacity-90 text-white text-bold my-4 rounded"
        onClick={showZaloFn}
      >
        ZaloPay
      </button>
      <PayPalButtons createOrder={createOrder} onApprove={onApprove} />
    </>
  );
};

export default PayPalContainer;
