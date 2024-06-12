import { fetchCategory } from "@/api/category";
import Link from "next/link";

export default async function CategoryPage() {
  const data = await fetchCategory();

  console.log(data);

  return (
    <section>
      {data?.map((item) => (
        <section key={item.id}>
          <h1>
            <Link
              href={`/category/${item.id}`}
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
          </ul>
        </section>
      ))}
    </section>
  );
}
