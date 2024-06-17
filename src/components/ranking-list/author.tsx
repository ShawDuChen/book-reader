import { fetchAuthorHot } from "@/api/author";
import Link from "next/link";
import { HTMLAttributes } from "react";

export default async function AuthorRankingList({
  className,
}: HTMLAttributes<HTMLDivElement>) {
  const data = await fetchAuthorHot();
  return (
    <section className={className}>
      <h2>作者排行榜</h2>
      <ul>
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
