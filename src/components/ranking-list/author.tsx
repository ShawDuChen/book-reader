import { fetchAuthorHot } from "@/api/author";
import { RankListProps } from "app";
import Link from "next/link";

export default async function AuthorRankingList({
  className,
  limit,
  layout = "vertical",
}: RankListProps) {
  const data = await fetchAuthorHot(limit);
  return (
    <section
      className={`${layout === "vertical" ? "block" : "flex flex-wrap gap-x-4"} ${className}`}>
      <h2>作者排行榜</h2>
      <ul
        className={`${layout === "vertical" ? "block" : "flex flex-wrap gap-x-4"}`}>
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
