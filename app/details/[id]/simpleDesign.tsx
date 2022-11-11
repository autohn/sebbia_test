"use client";

import { useContext, useEffect } from "react";
import { LoadingContext } from "../../clientContextProvider";

export default function SimpleDesign() {
  const { context, setContext } = useContext(LoadingContext);

  return <>{JSON.stringify(context)}</>;
}
