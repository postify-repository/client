import TrendingPage from "@/app/(post)/trending/[filter]/page";
import { Navigation } from "@/components/layout/navbar";

export default function Home() {
  return (
    <>
      <Navigation />
      <TrendingPage />
    </>
  );
}
