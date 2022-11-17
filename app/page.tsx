import sebbiaapi from "../src/api";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ResetContext } from "./resetContext";

export type CategoryType = {
  id: number;
  name: string;
};

async function getData() {
  const res = await (await fetch(sebbiaapi.categories)).json();

  const categories: CategoryType[] = [];
  await Promise.all(
    res.list.map(async (category: CategoryType, key: number) => {
      const news = await (await fetch(sebbiaapi.news(category.id, 0))).json();
      if (news.list.length != 0) {
        categories.push(res.list[category.id]);
      }
    })
  );

  return categories;
}

export default async function Page() {
  const categories = (await getData()).sort((a, b) => a.id - b.id);

  if (!Array.isArray(categories)) {
    notFound();
  }

  return (
    <>
      <ResetContext />
      {categories.map((category: CategoryType, key: number) => (
        <p className="" key={key}>
          <Link href={`/` + category.id}>{category.name}</Link>
        </p>
      ))}
    </>
  );
}
