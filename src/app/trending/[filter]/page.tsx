"use client";

import BlankPostCard from "@/components/post/SkeletonPostCard";
import PostCard from "@/components/post/PostCard";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

export default function TrendingFilterPage() {
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
      // 실제로는 여기서 API 호출을 하겠지만, 지금은 하드코딩된 데이터 사용
      const filterData = {
        day: {
          posts: [
            {
              id: 1,
              title:
                "오늘의 인기: React 19 베타 출시 호롤롤롤ㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹ",
              description:
                "React 19의 베타 버전이 공개되었습니다. 새로운 기능들과 개선사항을 살펴보겠습니다. 주요 기능으로는 Route 캐시 기능이 추가되었습니다.",
              date: "2025년 1월 15일",
              comments: 67,
              author: "react.team",
              likes: 456,
              hasImage: true,
            },
          ],
        },
        week: {
          posts: [
            {
              id: 1,
              title: "이번 주 인기: Next.js 15의 새로운 기능들",
              description:
                "Next.js 15가 출시되면서 많은 새로운 기능들이 추가되었습니다. 이번 버전에서는 성능 개선과 개발자 경험 향상에 중점을 두었는데요...",
              date: "2025년 1월 15일",
              comments: 45,
              author: "next.dev",
              likes: 320,
              hasImage: true,
            },
            {
              id: 2,
              title: "React Server Components 완벽 가이드",
              description:
                "React Server Components는 React의 새로운 패러다임입니다. 이 글에서는 RSC의 개념부터 실제 구현까지 자세히 다뤄보겠습니다...",
              date: "2025년 1월 14일",
              comments: 32,
              author: "react.master",
              likes: 289,
              hasImage: false,
            },
          ],
        },
        month: {
          posts: [
            {
              id: 1,
              title: "이번 달 인기: TypeScript 5.3 업데이트",
              description:
                "TypeScript 5.3이 정식 출시되었습니다. 이번 업데이트에서는 성능 개선과 새로운 타입 기능들이 추가되었는데요...",
              date: "2025년 1월 15일",
              comments: 89,
              author: "ts.dev",
              likes: 567,
              hasImage: true,
            },
          ],
        },
        year: {
          posts: [
            {
              id: 1,
              title: "2025년 인기: AI와 프론트엔드 개발",
              description:
                "AI 기술이 프론트엔드 개발에 어떻게 영향을 미치고 있는지, 그리고 앞으로의 전망에 대해 알아보겠습니다...",
              date: "2025년 1월 15일",
              comments: 156,
              author: "ai.frontend",
              likes: 892,
              hasImage: true,
            },
          ],
        },
      };

      // URL에서 filter 파라미터 추출
      const urlFilter = window.location.pathname.split("/").pop() || "week";

      // 유효한 필터 값들
      const validFilters = ["day", "week", "month", "year"];

      if (!validFilters.includes(urlFilter)) {
        notFound();
      }

      // 로딩 시뮬레이션 (실제 API 호출 시간을 시뮬레이션)
      setTimeout(() => {
        const currentData = filterData[urlFilter as keyof typeof filterData];
        setPosts(currentData.posts);
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
      setSkeletonCount(getSkeletonCount());
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
