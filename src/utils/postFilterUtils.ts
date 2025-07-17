import { TRENDING_FILTER } from "@/constants/navigation";
import type { PostCardType } from "@/types/post";
import dayjs from "dayjs";

/**
 * 필터되지 않은 post 데이터를 timestamp 기준으로 오늘, 이번 주, 이번 달, 올해 기준으로 필터링하는 함수
 * 지원하는 필터의 범위 : ["today", "week", "month", "year"]
 * ## 동작 방식
 * 1. filter 값의 유효성 검증 후, 유효하지 않은 경우 에러 발생
 * 2. 각 filter 값에 해당하는 범위의 post만 필터링하여 return
 *
 * @param {string} params.filter - 필터링 기준 (today, week, month, year)
 * @param {PostCardProps[]} params.dummyPosts - 필터링할 post 데이터
 * @throws {Error} 필터링 기준이 올바르지 않은 경우 에러 발생
 * @returns {PostCardProps[]} 필터링된 post 데이터 반환
 */
export const filterPost = ({
  filter,
  dummyPosts,
}: {
  filter: string;
  dummyPosts: PostCardType[];
}) => {
  const isValid = TRENDING_FILTER.map((item) => item.value).includes(filter);

  if (!isValid) {
    throw new Error(`Invalid filter : ${filter}`);
  }

  const today = dayjs();

  switch (filter) {
    case "today":
      return dummyPosts.filter((post) => {
        return today.isSame(dayjs(post.createdAt), "day");
      });
    case "week":
      return dummyPosts.filter((post) => {
        return today.isSame(dayjs(post.createdAt), "week");
      });
    case "month":
      return dummyPosts.filter((post) => {
        return today.isSame(dayjs(post.createdAt), "month");
      });
    case "year":
      return dummyPosts.filter((post) => {
        return today.isSame(dayjs(post.createdAt), "year");
      });

    default:
      throw new Error(`Invalid filter : ${filter}`);
  }
};
