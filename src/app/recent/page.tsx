import PostList from "@/components/main-page/PostList";

const dummyPosts = [
  {
    postId: "1",
    title: "최근 게시물",
    description: "최근 게시물의 내용입니다. 이 데이터는 더미데이터입니다",
    imageUrl: "/images/trending/1.png",
    date: "2025년 7월 3일",
    commentCount: 8,
    authorName: "작가",
    authorAvatar: "https://github.com/shadcn.png",
    likeCount: 123,
  },
  {
    postId: "2",
    title: "최근 게시물",
    description: "최근 게시물의 내용입니다. 이 데이터는 더미더미데이터입니다.",
    imageUrl: "/images/trending/1.png",
    date: "2025년 7월 3일",
    commentCount: 8,
    authorName: "작가",
    authorAvatar: "https://github.com/shadcn.png",
    likeCount: 123,
  },
];

export default function RecentPage() {
  return <PostList posts={dummyPosts} loading={false} />;
}
