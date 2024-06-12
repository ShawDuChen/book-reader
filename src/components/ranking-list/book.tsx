import { fetchBookHot } from "@/api/book";
import Link from "next/link";

export default async function BookRankingList() {
  const data = await fetchBookHot();

  return (
    <section>
      <h2>书籍排行榜</h2>
      <ul className="pl-6">
        {data?.map((item) => (
          <li key={item.id}>
            <Link
              href={`/book/${item.id}`}
              className="text-primary hover:underline">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
