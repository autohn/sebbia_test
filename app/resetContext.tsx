"use client";

import { useContext, useEffect } from "react";
import { LoadingContext } from "./clientContextProvider";

export function ResetContext() {
  const { context, setContext } = useContext(LoadingContext);
  useEffect(() => {
    setContext(null);
  }, []);
  return <></>;
}
