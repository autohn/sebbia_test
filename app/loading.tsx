"use client";

import { useRouter } from "next/navigation";
import { useContext } from "react";
import { LoadingContext } from "./clientContextProvider";
import SimpleDesign from "./details/[id]/simpleDesign";

export default function Loading() {
  const { context, setContext } = useContext(LoadingContext);
  if (context) {
    return (
      <>
        <SimpleDesign></SimpleDesign>
        {/*       loading{JSON.stringify(userName)} */}
      </>
    );
  } else {
    return <>Loading</>;
  }
}
