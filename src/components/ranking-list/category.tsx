import { fetchCategory } from "@/libs/fetch-server";
import Link from "next/link";

export default async function CategoryRankingList() {
  const data = await fetchCategory();

  return (
    <section>
      <h2>分类排行榜</h2>
      <ul className="pl-6">
        {data?.map((item) => (
          <li key={item.id}>
            <Link
              href={`/category/${item.id}`}
              className="text-primary hover:underline">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
