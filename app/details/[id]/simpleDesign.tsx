"use client";
import { NewsType } from "../../[id]/page";

export default function SimpleDesign({ details }: { details: NewsType }) {
  return (
    <>
      <div className="">
        <p>{details.title}</p>
        <p>{details.shortDescription}</p>
      </div>
    </>
  );
}
