import sebbiaapi from "../../src/api";
import Link from "next/link";
import { notFound } from "next/navigation";
import DetailsPreloader from "./detailsPreloader";
import { type } from "os";

export type NewsType = {
  id: number;
  title: string;
  date: string;
  shortDescription: string;
};

async function getData(id: number, page: number = 0) {
  const res = await fetch(sebbiaapi.news(id, page));
  return res.json();
}

export default async function Page({
  params,
  searchParams,
}: {
  params?: { id?: string };
  searchParams?: { page?: string };
}) {
  //TODO возмодно баг некста https://github.com/vercel/next.js/issues/41884
  /* { params: { id: number; }, searchParams: { page: number;}} */
  /*  console.log("------------");
  console.log(a);
  console.log("------------");

   let params = { id: 0 };

  let searchParams = { page: 0 };
 */
  let id = parseInt(params?.id ?? "0");

  let page = parseInt(searchParams?.page ?? "0");

  const news = await getData(id, page);

  if (news.code !== 0 || news.list.length == 0) {
    notFound();
  }

  return (
    <>
      <ul>
        {news.list.map((element: NewsType, key: number) => (
          <li key={key}>
            <DetailsPreloader element={element}></DetailsPreloader>
          </li>
        ))}
      </ul>
    </>
  );
}
