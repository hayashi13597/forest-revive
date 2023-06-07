"use client";
import { IUserDonation } from "@/app/page";
import React, { FC, useEffect, useReducer } from "react";
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
  console.log(action);
  switch (action.type) {
    case "add":
      return [action.payload, ...state];
    case "update":
      if (action.initState) return [...action.initState, ...action.payload];
  }
  return state;
};

interface ComponentTogetherProps {
  setRerender(rerender: boolean): void;
  rerender: boolean;
}
const ComponentTogether: FC<ComponentTogetherProps> = ({
  setRerender,
  rerender,
}) => {
  const [state, dispatch] = useReducer(reducer, initState);
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        {
          dispatch({ type: "update", payload: "", initState: data });
        }
      });
  }, []);
  return (
    <div>
      <FormController
        rerender={rerender}
        setRerender={setRerender}
        dispatch={dispatch}
      />
      <LeaderBoard listUser={state} />
      <Momo rerender={rerender} setRerender={setRerender} />
    </div>
  );
};

export default ComponentTogether;
