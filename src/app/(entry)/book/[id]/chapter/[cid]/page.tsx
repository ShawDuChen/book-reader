import { fetchBookInfo } from "@/api/book";
import { fetchChapterInfo } from "@/api/chapter";
import Link from "next/link";
import ChapterChanger from "./chapter-changer";

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
      <ChapterChanger
        book_id={book.id}
        prev_chapter_id={chapter?.prev_chapter_id}
        next_chapter_id={chapter?.next_chapter_id}
      />
    </section>
  );
}
