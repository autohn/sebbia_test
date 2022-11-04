import sebbiaapi from "../src/api";
import { use } from "react";
import Link from "next/link";

async function getData() {
  const res = await fetch(sebbiaapi.categories);
  return res.json();
}

export default function Page() {
  const categories = use(getData());

  return (
    <>
      {categories.list.map(
        (category: { id: number; name: string }, key: number) => (
          <li key={key}>
            <Link href={`/` + category.id}>{JSON.stringify(category)}</Link>
          </li>
        )
      )}{" "}
    </>
  );
}
