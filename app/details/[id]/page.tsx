import sebbiaapi from "../../../src/api";
import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getData(id: number) {
  const res = await fetch(sebbiaapi.details(id));
  return res.json();
}

export default function Page({ params }: any) {
  let id = params.id;

  const details = use(getData(id));

  if (!Array.isArray(details)) {
    notFound();
  }

  //console.log(name.list);

  return <>{JSON.stringify(details)}</>;
}
