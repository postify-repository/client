"use client";

import BlankPostCard from "@/components/post/SkeletonPostCard";
import PostCard from "@/components/post/PostCard";
import { useEffect, useState } from "react";

export default function FeedPage() {
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
      // Blog post data for feed
      const blogPosts = [
        {
          id: 1,
          title: "내 피드: 개인화된 콘텐츠 추천",
          description:
            "사용자의 관심사와 읽기 패턴을 분석하여 맞춤형 콘텐츠를 추천하는 시스템을 구축해보았습니다...",
          date: "2025년 1월 15일",
          comments: 12,
          author: "user.dev",
          likes: 89,
          hasImage: true,
        },
        {
          id: 2,
          title: "팔로우한 작가의 최신 글1",
          description:
            "팔로우하고 있는 개발자들의 최신 포스트들을 모아서 보여드립니다. 다양한 관점의 기술 글을 만나보세요...",
          date: "2025년 1월 15일",
          comments: 8,
          author: "followed.author",
          likes: 67,
          hasImage: false,
        },
        {
          id: 3,
          title: "팔로우한 작가의 최신 글2",
          description:
            "팔로우하고 있는 개발자들의 최신 포스트들을 모아서 보여드립니다. 다양한 관점의 기술 글을 만나보세요...",
          date: "2025년 1월 15일",
          comments: 8,
          author: "followed.author",
          likes: 67,
          hasImage: false,
        },
        {
          id: 4,
          title: "팔로우한 작가의 최신 글3",
          description:
            "팔로우하고 있는 개발자들의 최신 포스트들을 모아서 보여드립니다. 다양한 관점의 기술 글을 만나보세요...",
          date: "2025년 1월 15일",
          comments: 8,
          author: "followed.author",
          likes: 67,
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
          `[Feed] 화면 크기: ${window.innerWidth}px, 스켈레톤 개수: ${newCount}`,
        );
        console.log(`[Feed] DOM 요소 절약: ${8 - newCount}개`);
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
