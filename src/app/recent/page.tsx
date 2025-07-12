"use client";

import BlankPostCard from "@/components/post/SkeletonPostCard";
import PostCard from "@/components/post/PostCard";
import { useEffect, useState } from "react";

export default function RecentPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState<
    Array<{
      id: number;
      title: string;
      description: string;
      date: string;
      comments: number;
      author: string;
      likes: number;
      hasImage: boolean;
    }>
  >([]);

  useEffect(() => {
    const loadData = async () => {
      // Blog post data for recent
      const blogPosts = [
        {
          id: 1,
          title: "최신: TypeScript 5.3 업데이트 소식",
          description:
            "TypeScript 5.3이 정식 출시되었습니다. 이번 업데이트에서는 성능 개선과 새로운 타입 기능들이 추가되었는데요...",
          date: "2025년 1월 15일",
          comments: 23,
          author: "ts.dev",
          likes: 156,
          hasImage: true,
        },
        {
          id: 2,
          title: "Tailwind CSS v4.0 베타 릴리즈",
          description:
            "Tailwind CSS의 새로운 메이저 버전이 베타로 공개되었습니다. 완전히 새로운 아키텍처로 재작성되었다고 하네요...",
          date: "2025년 1월 15일",
          comments: 18,
          author: "tailwind.css",
          likes: 134,
          hasImage: false,
        },
      ];

      // 로딩 시뮬레이션 (실제 API 호출 시간을 시뮬레이션)
      setTimeout(() => {
        setPosts(blogPosts);
        setIsLoading(false);
      }, 2000); // 2초 후 로딩 완료
    };

    loadData();
  }, []);

  // 화면 크기에 따른 스켈레톤 카드 개수 계산
  const getSkeletonCount = () => {
    if (typeof window === "undefined") return 4; // SSR 시 기본값

    const width = window.innerWidth;
    if (width >= 1024) return 8; // lg: 4열
    if (width >= 768) return 6; // md: 3열
    if (width >= 640) return 4; // sm: 2열
    return 2; // 기본: 1열
  };

  const [skeletonCount, setSkeletonCount] = useState(4);

  useEffect(() => {
    const updateSkeletonCount = () => {
      const newCount = getSkeletonCount();
      setSkeletonCount(newCount);

      // 성능 측정 (개발 환경에서만)
      if (process.env.NODE_ENV === "development") {
        console.log(
          `[Recent] 화면 크기: ${window.innerWidth}px, 스켈레톤 개수: ${newCount}`,
        );
        console.log(`[Recent] DOM 요소 절약: ${8 - newCount}개`);
      }
    };

    // 초기 설정
    updateSkeletonCount();

    // 화면 크기 변경 시 업데이트
    window.addEventListener("resize", updateSkeletonCount);
    return () => window.removeEventListener("resize", updateSkeletonCount);
  }, []);

  return (
    <div className="mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {isLoading
          ? // 로딩 중일 때는 화면 크기에 맞는 BlankPostCard들을 렌더링
            Array.from({ length: skeletonCount }, (_, index) => (
              <BlankPostCard key={`loading-${index}`} />
            ))
          : // 로딩 완료되면 실제 PostCard들을 렌더링
            posts.map((post) => <PostCard key={post.id} post={post} />)}
      </div>
    </div>
  );
}
