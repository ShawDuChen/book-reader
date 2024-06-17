import AuthorRankingList from "./author";
import BookRankingList from "./book";
import CategoryRankingList from "./category";
import ChapterRankingList from "./chapter";

export default async function Recommend() {
  return (
    <section className="p-4 my-8 space-y-2 border rounded-md">
      <CategoryRankingList layout="horizontal" limit={5} />
      <AuthorRankingList layout="horizontal" limit={5} />
      <BookRankingList layout="horizontal" limit={5} />
      <ChapterRankingList layout="horizontal" limit={5} />
    </section>
  );
}
