import { fetchCategoryHot } from "@/api/category";
import { RankListProps } from "app";
import Link from "next/link";

export default async function CategoryRankingList({
  limit,
  className,
  layout = "vertical",
}: RankListProps) {
  const data = await fetchCategoryHot(limit);

  return (
    <section
      className={`${layout === "vertical" ? "block" : "flex flex-wrap gap-x-4"} ${className}`}>
      <h2>分类排行榜</h2>
      <ul
        className={`${layout === "vertical" ? "block" : "flex flex-wrap gap-x-4"}`}>
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
