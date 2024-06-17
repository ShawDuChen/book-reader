import { fetchBookHot } from "@/api/book";
import { RankListProps } from "app";
import Link from "next/link";

export default async function BookRankingList({
  limit,
  className,
  layout = "vertical",
}: RankListProps) {
  const data = await fetchBookHot(limit);

  return (
    <section
      className={`${layout === "vertical" ? "block" : "flex flex-wrap gap-x-4"} ${className}`}>
      <h2>书籍排行榜</h2>
      <ul
        className={`${layout === "vertical" ? "block" : "flex flex-wrap gap-x-4"}`}>
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
