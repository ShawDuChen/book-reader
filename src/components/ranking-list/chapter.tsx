import { fetchChapterHot } from "@/api/chapter";
import Link from "next/link";

export default async function ChapterRankingList() {
  const data = await fetchChapterHot();
  return (
    <section>
      <h2>章节排行榜</h2>
      <ul className="pl-6">
        {data?.map((item) => (
          <li key={item.id}>
            <Link
              href={`/book/${item.id}`}
              className="text-primary hover:underline">
              {item.title}《{item.book?.name}》
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
