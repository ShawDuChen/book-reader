import { fetchChapterInfo } from "@/api/chapter";

export default async function ChapterInfoPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const chapter = await fetchChapterInfo(id);

  return (
    <section>
      <h1 className="text-2xl font-bold">{chapter?.book?.name}</h1>
      <h2 className="text-xl font-semibold">{chapter?.title}</h2>
      <pre>
        <p className=" whitespace-break-spaces">{chapter?.content}</p>
      </pre>
    </section>
  );
}
