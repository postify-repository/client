import PostList from "@/components/main-page/PostList";

const dummyPosts = [
  {
    postId: "1",
    title: "최근 게시물",
    content: "최근 게시물의 내용입니다. 이 데이터는 더미데이터입니다",
    postImage: "/images/trending/1.png",
    createdAt: 1752162001000, // 2025년 7월 11일 00시 40분
    totalComment: 8,
    userName: "작가",
    userId: "1",
    userImage: "https://github.com/shadcn.png",
    totalLike: 123,
  },
  {
    postId: "2",
    title: "최근 게시물",
    content: "최근 게시물의 내용입니다. 이 데이터는 더미더미데이터입니다.",
    postImage: "/images/trending/1.png",
    createdAt: 1752162001000, // 2025년 7월 11일 00시 40분
    totalComment: 8,
    userName: "작가",
    userId: "1",
    userImage: "https://github.com/shadcn.png",
    totalLike: 123,
  },
];

export default function RecentPage() {
  return <PostList posts={dummyPosts} loading={false} />;
}
