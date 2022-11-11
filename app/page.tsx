import sebbiaapi from "../src/api";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ResetContext } from "./resetContext";

export type CategoryType = {
  id: number;
  name: string;
};

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
      <ResetContext />
      {categories.list.map((category: CategoryType, key: number) => (
        <li key={key}>
          <Link href={`/` + category.id}>{category.name}</Link>
        </li>
      ))}
    </>
  );
}
