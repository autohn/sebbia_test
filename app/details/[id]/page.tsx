import sebbiaapi from "../../../src/api";
import Link from "next/link";
import { notFound } from "next/navigation";
import FullDesign from "./fullDesign";
import { ResetContext } from "../../resetContext";

export type DetailsType = {
  id: number;
  title: string;
  date: string;
  shortDescription: string;
  fullDescription: string;
};

async function getData(id: number) {
  const res = await fetch(sebbiaapi.details(id));
  return res.json();
}

export default async function Page({ params }: { params?: { id?: string } }) {
  const id = parseInt(params?.id ?? "0");

  const details = await getData(id);

  if (details.code !== 0) {
    notFound();
  }

  return (
    <>
      <ResetContext />
      <FullDesign details={details.news} />
    </>
  );
}
