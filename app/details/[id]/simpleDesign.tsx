"use client";

import { useContext, useEffect } from "react";
import { LoadingContext } from "../../clientContextProvider";
import { NewsType } from "../../[id]/page";
import { DetailsType } from "./page";

export default function SimpleDesign({ details }: { details: NewsType }) {
  return (
    <>
      <p>{details.title}</p>

      <p>{details.shortDescription}</p>
    </>
  );
}
