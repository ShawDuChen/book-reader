import { fetchBook } from "@/api/book";
import Link from "next/link";

export default async function BookPage() {
  const data = await fetchBook();
  return (
    <section>
      {data?.map((item) => (
        <section key={item.id}>
          <h1>
            <Link
              href={`/book/${item.id}`}
              className="text-primary hover:underline">
              {item.name}
            </Link>
          </h1>
        </section>
      ))}
    </section>
  );
}
