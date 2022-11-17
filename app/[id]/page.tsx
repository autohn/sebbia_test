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

async function getNews(id: number, page: number = 0) {
  const news = await fetch(sebbiaapi.news(id, page));

  //return Promise.all([news.json(), nextnews.json()]);
  return news.json();
}

async function getNewsNextPage(id: number, page: number = 0) {
  const nextNews = await fetch(sebbiaapi.news(id, page + 1));

  return nextNews.json();
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
  const id = parseInt(params?.id ?? "0");

  const page = parseInt(searchParams?.page ?? "0");

  const news = await getNews(id, page);

  if (news.code !== 0 || news.list.length == 0) {
    notFound();
  }

  const isNextPage = !!(await getNewsNextPage(id, page)).list.length;

  return (
    <>
      <div className="grid grid-cols-2 gap-4 pb-5 lg:grid-cols-3">
        {news.list.map((element: NewsType, key: number) => (
          <div className="border-solid border-2 border-black" key={key}>
            <DetailsPreloader element={element}></DetailsPreloader>
          </div>
        ))}
      </div>

      <div className="inline-flex">
        {page - 1 >= 0 ? (
          <Link href={`/${id}?page=${page - 1}`}>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
              Prev
            </button>
          </Link>
        ) : (
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l  cursor-not-allowed">
            Prev
          </button>
        )}
        {isNextPage ? (
          <Link href={`/${id}?page=${page + 1}`}>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
              Next
            </button>
          </Link>
        ) : (
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r cursor-not-allowed">
            Next
          </button>
        )}
      </div>
    </>
  );
}
//page - 1 >= 0 && isNextPage
