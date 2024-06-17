import {
  Header,
  Footer,
  CategoryRankingList,
  AuthorRankingList,
  BookRankingList,
  ChapterRankingList,
} from "@/components";
import AdsBanner from "@/components/ads/ads";

export default function HomePage() {
  return (
    <>
      <Header />
      <section className="container p-6 sm:flex sm:justify-between">
        <CategoryRankingList />
        <AuthorRankingList />
        <BookRankingList />
        <ChapterRankingList />
      </section>
      <Footer />

      <AdsBanner />
    </>
  );
}
