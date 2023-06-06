"use client";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { FC } from "react";
import { TypeAccount } from ".";

interface PayPalContainerProps {
  amount: number;
  callback: (account: TypeAccount) => {};
}

const PayPalContainer: FC<PayPalContainerProps> = ({ amount, callback }) => {
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

  return <PayPalButtons createOrder={createOrder} onApprove={onApprove} />;
};

export default PayPalContainer;
