import Link from "next/link";

export interface ChapterChangerProps {
  book_id?: number;
  prev_chapter_id?: number;
  next_chapter_id?: number;
}

export default function ChapterChanger({
  book_id,
  prev_chapter_id,
  next_chapter_id,
}: ChapterChangerProps) {
  return (
    <section className="chapter-changer flex justify-between">
      {prev_chapter_id ? (
        <Link
          href={`/book/${book_id}/chapter/${prev_chapter_id}`}
          className="text-primary hover:underline w-1/3 text-left">
          上一章
        </Link>
      ) : (
        <section className="w-1/3" />
      )}
      <Link
        href={`/book/${book_id}`}
        className="text-primary hover:underline w-1/3 text-center">
        目录
      </Link>
      {next_chapter_id ? (
        <Link
          href={`/book/${book_id}/chapter/${next_chapter_id}`}
          className="text-primary hover:underline w-1/3 text-right">
          下一章
        </Link>
      ) : (
        <section className="w-1/3" />
      )}
    </section>
  );
}
