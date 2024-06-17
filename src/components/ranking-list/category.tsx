import { fetchCategoryHot } from "@/api/category";
import Link from "next/link";
import { HTMLAttributes } from "react";

export default async function CategoryRankingList({
  className,
}: HTMLAttributes<HTMLDivElement>) {
  const data = await fetchCategoryHot();

  return (
    <section className={className}>
      <h2>分类排行榜</h2>
      <ul>
        {data?.map((item) => (
          <li key={item.id}>
            <Link
              href={`/category/${item.id}`}
              className="text-primary hover:underline">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
