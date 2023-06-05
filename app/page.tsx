"use client";
import Footer from "@/components/footer";
import Nav from "@/components/Nav";
import Header from "@/components/Header";
import Influence from "@/components/Influence";
import Plant from "@/components/Plant";
import { TypeAccount } from "@/components/form";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { Toaster } from "react-hot-toast";
import LayoutProvider from "@/components/LayoutProvider";

import ComponentTogether from "@/components/ComponentTogether";
export interface IUserDonation extends TypeAccount {
  amount: string;
  message: string;
  createdAt?: string;
}

export default function Home() {
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
          <ComponentTogether />
          <Plant />
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
