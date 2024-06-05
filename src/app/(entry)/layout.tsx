import { Header, Footer } from "@/components";

export default function HomePage({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="container py-6">{children}</div>
      <Footer />
    </>
  );
}
