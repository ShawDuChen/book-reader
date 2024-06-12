import { fetchBookInfo } from "@/api/book";
import Image from "next/image";
import Link from "next/link";

export default async function BookDetailPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const book = await fetchBookInfo(id);

  return (
    <section>
      <h1 className="text-2xl font-bold text-primary">{book.name}</h1>
      <h2>Author: {book.author?.name}</h2>
      <p>
        Fetch URL:{" "}
        {book.fetch_url ? (
          <Link
            href={book.fetch_url}
            target="_blank"
            className="text-primary hover:underline">
            {book.fetch_url}
          </Link>
        ) : (
          "-"
        )}
      </p>
      {book.cover && <Image src={book.cover} alt={book.name} />}
      <ul className="md:flex md:flex-wrap md:gap-y-4">
        {book.chapters?.map((chapter) => (
          <li key={chapter.id} className="w-1/3 text-center">
            <Link
              href={`/chapter/${chapter.id}`}
              className="text-primary hover:underline">
              {chapter.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
