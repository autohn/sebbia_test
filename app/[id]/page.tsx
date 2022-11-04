import sebbiaapi from "../../src/api";
import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getData(id: number) {
  const res = await fetch(sebbiaapi.news(id));
  return res.json();
}

export default function Page({ params }: any) {
  //TODO разобраться почему с нормальным тайпингом ошибка https://stackoverflow.com/questions/74232736/search-params-for-server-components-in-next-js-13-app-directory
  //{ params: { id: number } }
  let id = params.id;

  const news = use(getData(id));

  if (!Array.isArray(news)) {
    notFound();
  }

  return (
    <>
      {news.list.map((element: { id: number; name: string }, key: number) => (
        <li key={key}>
          <Link href={`/details/` + element.id}>{JSON.stringify(element)}</Link>
        </li>
      ))}{" "}
    </>
  );
}
