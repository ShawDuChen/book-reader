import { fetchBookHot } from "@/api/book";
import Link from "next/link";
import { HTMLAttributes } from "react";

export default async function BookRankingList({
  className,
}: HTMLAttributes<HTMLDivElement>) {
  const data = await fetchBookHot();

  return (
    <section className={className}>
      <h2>书籍排行榜</h2>
      <ul>
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
