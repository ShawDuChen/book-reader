import { Header, Footer, Recommend } from "@/components";
import AdsBanner from "@/components/ads/ads";

export default function HomePage({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="container main p-6">
        {children}
        <Recommend />
      </div>
      <Footer />

      <AdsBanner />
    </>
  );
}
