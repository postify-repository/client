import { PostListProps } from "@/types/post";
import PostCard from "../post/PostCard";
import SkeletonCard from "../post/SkeletonCard";
import EmptyPostInfo from "../post/EmptyPostInfo";

interface PostListWithLoadingProps extends PostListProps {
  loading: boolean;
}

export default function PostList({ posts, loading }: PostListWithLoadingProps) {
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
