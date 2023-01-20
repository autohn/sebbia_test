"use client";
import { useContext } from "react";
import { LoadingContext } from "./clientContextProvider";
import SimpleDesign from "./details/[id]/simpleDesign";

export default function Loading() {
  const { context, setContext } = useContext(LoadingContext);

  return (
    <>
      {context ? (
        <SimpleDesign details={context}></SimpleDesign>
      ) : (
        <div className="">Loading...</div>
      )}
    </>
  );
}
