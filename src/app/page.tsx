import {
  Header,
  Footer,
  CategoryRankingList,
  AuthorRankingList,
  BookRankingList,
  ChapterRankingList,
} from "@/components";

export default function HomePage() {
  return (
    <>
      <Header />
      <section className="container p-6 flex flex-col pb-16">
        <CategoryRankingList />
        <AuthorRankingList />
        <BookRankingList />
        <ChapterRankingList />
      </section>
      <Footer />
    </>
  );
}
