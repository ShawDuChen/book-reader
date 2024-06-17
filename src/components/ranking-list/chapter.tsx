import { fetchChapterHot } from "@/api/chapter";
import Link from "next/link";
import { HTMLAttributes } from "react";

export default async function ChapterRankingList({
  className,
}: HTMLAttributes<HTMLDivElement>) {
  const data = await fetchChapterHot();
  return (
    <section className={className}>
      <h2>章节排行榜</h2>
      <ul>
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
