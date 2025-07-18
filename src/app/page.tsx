import TrendingPage from "@/app/(postview)/trending/[filter]/page";
import Navigation from "@/components/layout/navbar";

export default function Home() {
  return (
    <>
      <Navigation />
      <TrendingPage />
    </>
  );
}
