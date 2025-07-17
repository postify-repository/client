import { ChartNoAxesCombined, Clock, Rss } from "lucide-react";

export const NAV_ITEMS = [
  {
    label: "트렌딩",
    href: "/trending",
    Icon: ChartNoAxesCombined,
  },
  {
    label: "최신",
    href: "/recent",
    Icon: Clock,
  },
  {
    label: "피드",
    href: "/feed",
    Icon: Rss,
  },
];

export const TRENDING_FILTER = [
  {
    label: "오늘",
    value: "today",
  },
  {
    label: "이번 주",
    value: "week",
  },
  {
    label: "이번 달",
    value: "month",
  },
  {
    label: "올해",
    value: "year",
  },
];
