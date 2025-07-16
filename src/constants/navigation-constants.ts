import { ChartNoAxesCombined, Clock, Rss } from "lucide-react";

export const NAV_ITEMS = [
  {
    label: "트렌딩",
    href: "/trending",
    icon: ChartNoAxesCombined,
  },
  {
    label: "최신",
    href: "/recent",
    icon: Clock,
  },
  {
    label: "피드",
    href: "/feed",
    icon: Rss,
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
