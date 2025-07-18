"use client";

import PostList from "@/components/main-page/PostList";
import { filterPost } from "@/utils/postFilterUtils";
import { useParams } from "next/navigation";

const dummyPosts = [
  {
    postId: "1",
    title: "올해 필터 - 게시물 제목은 얼마나 길게가능할까~~~~~~~",
    content:
      "이 게시물의 내용은 여러 줄로 표시됩니다아다망ㅇㅇㅁㄴㅇㅁㅇㅁㄴㅇㅁㅁㅁㄴㅁㅇㅁㅇㄴㅁㅁㄴㅇㅁㄴㅇㅁㄴㅁㅇㅁㅇ",
    postImage: "/images/trending/1.png",
    createdAt: 1736696401000, // 2025년 1월 13일 00시 40분
    totalComment: 8,
    userName: "작가명이 긴 경우는 어떻게 될까?",
    userId: "1",
    userImage: "https://github.com/shadcn.png",
    totalLike: 123,
  },
  {
    postId: "2",
    title: "이번달 필터 - 게시물 제목",
    content:
      "이 게시물의 내용은 여러 줄로 표시됩니다아다망ㅇㅇㅁㄴㅇㅁㅇㅁㄴㅇㅁㅁㅁㄴㅁㅇㅁㅇㄴㅁㅁㄴㅇㅁㄴㅇㅁㄴㅁㅇㅁㅇ",
    postImage: "/images/trending/1.png",
    createdAt: 1752162001000, // 2025년 7월 11일 00시 40분
    totalComment: 8,
    userName: "작가",
    userId: "1",
    userImage: "https://github.com/shadcn.png",
    totalLike: 123,
  },
  {
    postId: "3",
    title: "이번주 필터 - 게시물 제목",
    content:
      "이 게시물의 내용은 여러 줄로 표시됩니다아다망ㅇㅇㅁㄴㅇㅁㅇㅁㄴㅇㅁㅁㅁㄴㅁㅇㅁㅇㄴㅁㅁㄴㅇㅁㄴㅇㅁㄴㅁㅇㅁㅇ",
    postImage: "/images/trending/1.png",
    createdAt: 1752421501000, // 2025년 7월 14일 00시 45분
    totalComment: 8,
    userName: "작가",
    userId: "1",
    userImage: "https://github.com/shadcn.png",
    totalLike: 123,
  },
  {
    postId: "4",
    title: "오늘 필터 - 게시물 제목",
    content:
      "이 게시물의 내용은 여러 줄로 표시됩니다아다망ㅇㅇㅁㄴㅇㅁㅇㅁㄴㅇㅁㅁㅁㄴㅁㅇㅁㅇㄴㅁㅁㄴㅇㅁㄴㅇㅁㄴㅁㅇㅁㅇ",
    postImage: "/images/trending/1.png",
    createdAt: 1752679201000, // 2025년 7월 17일 00시 20분
    totalComment: 8,
    userName: "작가",
    userId: "1",
    userImage: "https://github.com/shadcn.png",
    totalLike: 123,
  },
];

export default function TrendingPage() {
  const params = useParams();
  const filter = (params.filter as string) || "week";

  const filteredData = filterPost({
    filter,
    dummyPosts,
  });
  return <PostList posts={filteredData || []} loading={false} />;
}
