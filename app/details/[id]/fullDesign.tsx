import { useContext, useEffect } from "react";
import { LoadingContext } from "../../clientContextProvider";
import { DetailsType } from "./page";
import xss from "xss";

export default function FullDesign({ details }: { details: DetailsType }) {
  const clean = xss(details.fullDescription);

  return (
    <>
      {details.title}

      <div dangerouslySetInnerHTML={{ __html: clean }} />
    </>
  );
}
