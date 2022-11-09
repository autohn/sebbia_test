"use client";

import { useRouter } from "next/navigation";
import { useContext } from "react";
import { ThemeContext } from "./clientContextProvider";

export default function Loading({ params }: any) {
  // You can add any UI inside Loading, including a Skeleton.
  const { asPath }: any = useRouter();
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  const URL = `${origin}${asPath}`;
  const appContext = useContext(ThemeContext);
  console.log(appContext);

  /*   let use = useAppSelector(selectLoading);
  console.log(use); */
  return <>loading</>;
}
