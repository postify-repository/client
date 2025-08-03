import { redirect } from "next/navigation";

export default function TrendingPage() {
  // 최초 접속 시 week 필터 기본값으로 설정
  redirect("/trending/week");
}
