import TopTicker from "@/components/layout/TopTicker";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TopTicker />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
