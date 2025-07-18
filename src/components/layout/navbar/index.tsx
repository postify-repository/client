"use client";

import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import { NAV_ITEMS, TRENDING_FILTER } from "@/constants/navigation";
import Dropdown from "@/components/common/Dropdown";

export default function Navigation() {
  const pathname = usePathname();
  const params = useParams();
  const isTrending = pathname.startsWith("/trending") || pathname === "/";
  const currentFilter =
    TRENDING_FILTER.find((filter) => filter.value === params.filter) ||
    TRENDING_FILTER.find((filter) => filter.value === "week"); // 기본값으로 "이번 주" 설정

  return (
    <nav className="w-full flex justify-between items-center h-16 mb-8">
      <div className="flex items-center gap-4">
        {NAV_ITEMS.map(({ label, href, Icon }) => (
          <Link
            key={label}
            href={href}
            className={`flex items-center gap-2 p-2 ${
              (pathname === "/" && label === "트렌딩") ||
              pathname.startsWith(href)
                ? "text-primary border-b-2 border-primary"
                : "text-gray-500"
            }`}
          >
            <Icon className="size-4" />
            {label}
          </Link>
        ))}
      </div>
      {isTrending && (
        <Dropdown
          trigger={currentFilter?.label || "이번 주"}
          items={TRENDING_FILTER}
        />
      )}
    </nav>
  );
}
