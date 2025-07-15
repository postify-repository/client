export interface PostCardProps {
  postId: string;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  commentCount: number;
  authorName: string;
  authorAvatar: string;
  likeCount: number;
}

export interface PostListProps {
  posts: PostCardProps[];
}
