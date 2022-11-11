"use client";
import { useAppDispatch } from "../../src/store";
import { loadingSlice } from "../../src/loadingReducer";
import { useContext, useEffect } from "react";
import { LoadingContext } from "../clientContextProvider";
import Link from "next/link";
import { NewsType } from "./page";

export default function DetailsPreloader({ element }: { element: NewsType }) {
  const { context, setContext } = useContext(LoadingContext);
  useEffect(() => {
    setContext(null);
  }, []);
  /*   console.log(userName);
   */
  function onClick(element: NewsType) {
    setContext(element);
  }

  return (
    <>
      <Link onClick={() => onClick(element)} href={`/details/${element.id}`}>
        {JSON.stringify(element)}
      </Link>
    </>
  );
}
