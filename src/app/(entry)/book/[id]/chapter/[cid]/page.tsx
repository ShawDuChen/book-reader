import { fetchBookInfo } from "@/api/book";
import { fetchChapterInfo } from "@/api/chapter";

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
        <span>{book.name}</span> - <span>{book.author?.name || "-"}</span>
      </h1>
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
    </section>
  );
}
