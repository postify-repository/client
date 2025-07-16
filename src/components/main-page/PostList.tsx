import { PostCardProps } from "@/types/post";
import SkeletonCard from "@/components/post/SkeletonCard";
import EmptyPostInfo from "@/components/post/EmptyPostInfo";
import PostCard from "@/components/post/PostCard";

export default function PostList({
  posts,
  loading,
}: {
  posts: PostCardProps[];
  loading: boolean;
}) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {Array.from({ length: 8 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    );
  }

  if (posts.length === 0) {
    return <EmptyPostInfo />;
  }

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
      {posts.map((post) => (
        <PostCard key={post.postId} {...post} />
      ))}
    </div>
  );
}
