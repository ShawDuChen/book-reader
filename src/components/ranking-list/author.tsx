import { fetchAuthor } from "@/libs/fetch-server";
import Link from "next/link";

export default async function AuthorRankingList() {
  const data = await fetchAuthor();
  return (
    <section>
      <h2>作者排行榜</h2>
      <ul className="pl-6">
        {data?.map((item) => (
          <li key={item.id}>
            <Link
              href={`/author/${item.id}`}
              className="text-primary hover:underline">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
