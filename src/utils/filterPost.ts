/**
 *
 * @param filter
 * @param dummyPosts
 * @returns
 */
import { PostCardProps } from "@/types/post";

export const filterPost = ({
  filter,
  dummyPosts,
}: {
  filter: string;
  dummyPosts: PostCardProps[];
}) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayStart = today.getTime();

  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - today.getDay());
  const weekStart = startOfWeek.getTime();

  const endOfWeek = new Date(today);
  endOfWeek.setDate(today.getDate() + (6 - today.getDay()));
  endOfWeek.setHours(23, 59, 59, 999);
  const weekEnd = endOfWeek.getTime();

  const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const monthStart = startOfMonth.getTime();

  const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  endOfMonth.setHours(23, 59, 59, 999);
  const monthEnd = endOfMonth.getTime();

  const startOfYear = new Date(today.getFullYear(), 0, 1);
  const yearStart = startOfYear.getTime();

  const endOfYear = new Date(today.getFullYear(), 11, 31);
  endOfYear.setHours(23, 59, 59, 999);
  const yearEnd = endOfYear.getTime();

  switch (filter) {
    case "today":
      const todayEnd = todayStart + 24 * 60 * 60 * 1000 - 1;
      return dummyPosts.filter((post) => {
        return post.createdAt >= todayStart && post.createdAt <= todayEnd;
      });
    case "week":
      return dummyPosts.filter((post) => {
        return post.createdAt >= weekStart && post.createdAt <= weekEnd;
      });
    case "month":
      return dummyPosts.filter((post) => {
        return post.createdAt >= monthStart && post.createdAt <= monthEnd;
      });
    case "year":
      return dummyPosts.filter((post) => {
        return post.createdAt >= yearStart && post.createdAt <= yearEnd;
      });
    default:
      return dummyPosts;
  }
};
