import { fetchAuthor } from "@/api/author";
import Link from "next/link";

export default async function AuthorPage() {
  const data = await fetchAuthor();

  return (
    <section>
      {data?.map((item) => (
        <section key={item.id}>
          <h1>
            <Link
              href={`/author/${item.id}`}
              className="text-primary hover:underline">
              {item.name}
            </Link>
          </h1>
          <ul className="pl-12">
            {item.books?.map((book) => (
              <li key={book.id}>
                <Link
                  href={`/book/${book.id}`}
                  className="text-primary hover:underline">
                  {book.name}
                </Link>
              </li>
            ))}
            {item.books?.length === 10 && (
              <li>
                <Link
                  href={`/author/${item.id}`}
                  className="text-primary hover:underline">
                  查看全部...
                </Link>
              </li>
            )}
            {!item.books?.length && (
              <li className="text-primary">...暂无...</li>
            )}
          </ul>
        </section>
      ))}
    </section>
  );
}
