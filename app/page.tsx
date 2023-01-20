import sebbiaapi from "../src/api";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ResetContext } from "./resetContext";

export type CategoryType = {
  id: number;
  name: string;
};

export type CategoriesType = {
  list: CategoryType[];
};

async function getCategories(): Promise<CategoriesType> {
  const categories = await (await fetch(sebbiaapi.categories)).json();

  return categories;
}

async function getNotEmptyCategories(): Promise<CategoryType[]> {
  const allCategories = await getCategories();

  const categories: CategoryType[] = [];

  await Promise.all(
    allCategories.list.map(async (category: CategoryType, key: number) => {
      const news = await (await fetch(sebbiaapi.news(category.id, 0))).json();
      if (news.list.length != 0) {
        categories.push(allCategories.list[category.id]);
      }
    })
  );

  return categories.sort((a, b) => a.id - b.id);
}

export default async function Page() {
  const categories = await getNotEmptyCategories();

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
