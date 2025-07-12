"use client";

import { ArrowDown, Clock, Rss, TrendingUp } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Navigation tabs
  const navTabs = [
    {
      id: 1,
      name: "트렌딩",
      icon: <TrendingUp className="w-6 h-6" />,
      href: "/trending",
    },
    {
      id: 2,
      name: "최신",
      icon: <Clock className="w-6 h-6" />,
      href: "/recent",
    },
    {
      id: 3,
      name: "피드",
      icon: <Rss className="w-6 h-6" />,
      href: "/feed",
    },
  ];

  // Trending filter options
  const trendingFilters = [
    { label: "오늘", value: "day" },
    { label: "이번 주", value: "week" },
    { label: "이번 달", value: "month" },
    { label: "올해", value: "year" },
  ];

  const isTrendingPage = pathname.startsWith("/trending");
  const currentFilter = pathname.split("/").pop() || "week";

  const handleFilterChange = (filterValue: string) => {
    router.push(`/trending/${filterValue}`);
    setIsDropdownOpen(false);
  };

  // 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="py-6 flex justify-between items-center">
      <div className="flex items-center gap-1">
        {navTabs.map((tab) => {
          const isActive =
            pathname === tab.href ||
            (tab.href === "/trending" && pathname.startsWith("/trending"));

          return (
            <Link
              key={tab.id}
              href={tab.href}
              className={`flex items-center gap-2 cursor-pointer p-2 ${
                isActive
                  ? "font-bold text-[#212529] border-b-2 border-[#343a40]"
                  : "font-xl text-[#868e96]"
              }`}
            >
              {tab.icon}
              <span className="text-lg leading-[21.6px]">{tab.name}</span>
            </Link>
          );
        })}
      </div>

      {isTrendingPage && (
        <div className="flex items-center gap-2 relative" ref={dropdownRef}>
          <div
            className="flex items-center h-8 bg-white rounded shadow-[0px_0px_4px_#0000000d] px-3 cursor-pointer"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span className="text-sm font-semibold text-[#495057]">
              {trendingFilters.find((f) => f.value === currentFilter)?.label ||
                "이번 주"}
            </span>
            <ArrowDown className="w-4 h-4 ml-2" />
          </div>

          {/* Dropdown */}
          {isDropdownOpen && (
            <div className="absolute top-full right-0 mt-1 bg-white rounded shadow-lg border border-gray-200 z-10 min-w-[120px]">
              {trendingFilters.map((filter) => (
                <button
                  key={filter.value}
                  className={`w-full text-left px-3 py-2 text-sm transition-colors duration-150 ${
                    currentFilter === filter.value
                      ? " text-orange-500 font-semibold"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                  onClick={() => handleFilterChange(filter.value)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
