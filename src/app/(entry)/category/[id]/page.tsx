import { fetchCategoryInfo } from "@/api/category";
import Link from "next/link";

export default async function CategoryDetailPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const data = await fetchCategoryInfo(id);

  return (
    <section>
      <h1>{data.name}</h1>
      <ul className="pl-12">
        {data.books?.map((item) => (
          <li key={item.id}>
            <Link
              href={`/book/${item.id}`}
              className="text-primary hover:underline">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
