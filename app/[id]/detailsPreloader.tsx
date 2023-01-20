"use client";
import { useContext, useEffect } from "react";
import { LoadingContext } from "../clientContextProvider";
import Link from "next/link";
import { NewsType } from "./page";

export default function DetailsPreloader({ element }: { element: NewsType }) {
  const { context, setContext } = useContext(LoadingContext);
  useEffect(() => {
    setContext(null);
  }, []);

  function onClick(element: NewsType) {
    setContext(element);
  }
  const date = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(Date.parse(element.date));

  return (
    <>
      <Link onClick={() => onClick(element)} href={`/details/${element.id}`}>
        <p className="text-center pb-5">{date}</p>

        <p className="text-center pb-10">{element.title}</p>

        <p className="text-center text-sm"> {element.shortDescription}</p>
      </Link>
    </>
  );
}
