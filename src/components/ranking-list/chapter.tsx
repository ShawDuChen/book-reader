import { fetchChapterHot } from "@/api/chapter";
import { RankListProps } from "app";
import Link from "next/link";

export default async function ChapterRankingList({
  limit,
  className,
  layout = "vertical",
}: RankListProps) {
  const data = await fetchChapterHot(limit);
  return (
    <section
      className={`${layout === "vertical" ? "block" : "flex flex-wrap gap-x-4"} ${className}`}>
      <h2>章节排行榜</h2>
      <ul
        className={`${layout === "vertical" ? "block" : "flex flex-wrap gap-x-4"}`}>
        {data?.map((item) => (
          <li key={item.id}>
            <Link
              href={`/book/${item.book_id}/chapter/${item.id}`}
              className="text-primary hover:underline">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
