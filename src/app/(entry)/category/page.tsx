import { fetchCategory } from "@/api/category";
import Link from "next/link";

export default async function CategoryPage() {
  const data = await fetchCategory();

  return (
    <section className="sm:flex flex-wrap sm:gap-y-8">
      {data?.map((item) => (
        <section key={item.id} className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-full">
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
