import { fetchBookInfo } from "@/api/book";
import { fetchChapterInfo } from "@/api/chapter";
import Link from "next/link";

export default async function ChapterInfoPage({
  params: { id, cid },
}: {
  params: { id: string; cid: string };
}) {
  const book = await fetchBookInfo(id);
  const chapter = await fetchChapterInfo(cid);

  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">
        <Link
          href={`/book/${book.id}`}
          className="text-primary hover:underline">
          {book.name}
        </Link>
      </h1>
      <h2 className="text-xl font-semibold">
        <Link href={`/author/${book.author_id}`} className="text-primary">
          {book.author?.name || "-"}
        </Link>
      </h2>
      <h2 className="text-xl font-semibold">{chapter?.title}</h2>
      <pre className="space-y-2">
        {chapter?.content
          ?.split("。")
          .filter((line) => !!line)
          .map((line, index) => (
            <p key={index} className=" whitespace-break-spaces">
              {line}。
            </p>
          ))}
      </pre>
      <hr />
      <section className="chapter-changer flex justify-between">
        {chapter?.prev_chapter_id ? (
          <Link
            href={`/book/${book.id}/chapter/${chapter?.prev_chapter_id}`}
            className="text-primary hover:underline w-1/3 text-left">
            上一章
          </Link>
        ) : (
          <section className="w-1/3" />
        )}
        <Link
          href={`/book/${book.id}`}
          className="text-primary hover:underline w-1/3 text-center">
          目录
        </Link>
        {chapter?.next_chapter_id ? (
          <Link
            href={`/book/${book.id}/chapter/${chapter?.next_chapter_id}`}
            className="text-primary hover:underline w-1/3 text-right">
            下一章
          </Link>
        ) : (
          <section className="w-1/3" />
        )}
      </section>
    </section>
  );
}
