/**
 * @param stamp
 * @returns
 */
export const stampToTime = (stamp: number) => {
  const date = new Date(stamp);
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}년 ${mm}월 ${dd}일`;
};
