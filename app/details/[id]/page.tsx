import sebbiaapi from "../../../src/api";
import Link from "next/link";
import { notFound } from "next/navigation";
import SimpleDesign from "./simpleDesign";

async function getData(id: number) {
  const res = await fetch(sebbiaapi.details(id));
  return res.json();
}

export default async function Page({ params }: any) {
  let id = params.id;

  const details = await getData(id);

  if (details.code !== 0) {
    notFound();
  }

  console.log("SERVER SIDE");

  return (
    <>
      <SimpleDesign />
      {JSON.stringify(details)}
    </>
  );
}
