"use client";
import { useAppDispatch } from "../../src/store";
import { loadingSlice } from "../../src/loadingReducer";
import { useContext, useEffect } from "react";
import { LoadingContext } from "../clientContextProvider";
import Link from "next/link";
import { NewsType } from "./page";

export default function DetailsPreloader({ news }: any) {
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
      {news.map((element: NewsType, key: number) => (
        <li key={key}>
          <Link
            onClick={() => onClick(element)}
            href={`/details/${element.id}`}
          >
            {JSON.stringify(element)}
          </Link>
        </li>
      ))}
    </>
  );
}
