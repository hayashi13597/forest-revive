"use client";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Header from "@/components/Header";
import Influence from "@/components/Influence";
import Plant from "@/components/Plant";
import { TypeAccount } from "@/components/form";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { Toaster } from "react-hot-toast";
import LayoutProvider from "@/components/LayoutProvider";

import ComponentTogether from "@/components/ComponentTogether";
import { useState } from "react";
import Introduction from "@/components/Introduction";
export interface IUserDonation extends TypeAccount {
  amount: string;
  message: string;
  createdAt?: string;
}

export default function Home() {
  const [rerender, setRerender] = useState<boolean>(false);
  return (
    <div className=" bg-menu">
      <PayPalScriptProvider
        options={{
          "client-id":
            "AWxo3Fhm6y8cCAAA2CWpg-nnOca3IKQpMKiORWyUMfP6qYJPsC11OZ3A9yLs4uQnSIkx7SsD12GW0_ET",
        }}
      >
        <LayoutProvider>
          <Header />
          <Nav />
          <ComponentTogether rerender={rerender} setRerender={setRerender} />
          <Plant />
          <div className="flex justify-center sm:w-[90%] w-[98%] mx-auto ">
            <Introduction />
          </div>
          <Influence />
          <Footer />
        </LayoutProvider>
        <div className="text-base">
          <Toaster />
        </div>
      </PayPalScriptProvider>
    </div>
  );
}
