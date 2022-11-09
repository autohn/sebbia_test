import sebbiaapi from "../../src/api";
import Link from "next/link";
import { notFound } from "next/navigation";
import DetailsPreloader from "./detailsPreloader";

async function getData(id: number, page: number = 0) {
  const res = await fetch(sebbiaapi.news(id, page));
  return res.json();
}

export default async function Page({ params, searchParams }: any) {
  //TODO возмодно баг некста https://github.com/vercel/next.js/issues/41884
  /* { params: { id: number; }, searchParams: { page: number;}} */
  let id = params.id;

  let page = searchParams.page;

  const news = await getData(id, page);

  if (news.code !== 0 || news.list.length == 0) {
    notFound();
  }

  return (
    <>
      {news.list.map((element: { id: number; name: string }, key: number) => (
        <li key={key}>
          {/*           <DetailsPreloader></DetailsPreloader> */}
          <Link href={`/details/` + element.id}>{JSON.stringify(element)}</Link>
        </li>
      ))}{" "}
    </>
  );
}
