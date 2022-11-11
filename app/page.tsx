import sebbiaapi from "../src/api";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ResetContext } from "./resetContext";

async function getData() {
  const res = await fetch(sebbiaapi.categories);
  return res.json();
}

export default async function Page() {
  const categories = await getData();

  if (!Array.isArray(categories.list)) {
    notFound();
  }

  return (
    <>
      <ResetContext></ResetContext>
      {categories.list.map(
        (category: { id: number; name: string }, key: number) => (
          <li key={key}>
            <Link href={`/` + category.id}>{JSON.stringify(category)}</Link>
          </li>
        )
      )}
    </>
  );
}
