"use client";
import { IUserDonation } from "@/app/page";
import React, { useEffect, useReducer } from "react";
import FormController from "./form";
import LeaderBoard from "./board";
import Momo from "./Momo";
const initState: IUserDonation[] = [];

const reducer = (
  state: typeof initState,
  action: {
    type: string;
    payload: any;
    initState?: IUserDonation[];
  }
) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "update":
      if (action.initState) return [...state, ...action.initState];
  }
  return state;
};
const ComponentTogether = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: "update", payload: "", initState: data })
      );
  }, []);
  return (
    <div>
      <FormController dispatch={dispatch} />
      <LeaderBoard listUser={state} />
      <Momo />
    </div>
  );
};

export default ComponentTogether;
