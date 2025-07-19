import TrendingPage from "@/app/(layout)/(postview)/trending/[filter]/page";
import Navigation from "@/components/layout/navbar";

export default function Home() {
  return (
    <>
      <Navigation />
      <TrendingPage />
    </>
  );
}
