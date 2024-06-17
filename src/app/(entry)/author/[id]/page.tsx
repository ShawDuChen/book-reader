import { fetchAuthorInfo } from "@/api/author";
import Link from "next/link";

export default async function AuthorDetailPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const data = await fetchAuthorInfo(id);
  return (
    <section>
      <h1>{data.name}</h1>
      <h2>{data.description}</h2>
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
