"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import { NAV_ITEMS, TRENDING_FILTER } from "@/constants/navigation-constants";

export default function Navigation() {
  const pathname = usePathname();
  const params = useParams();
  const isTrending = pathname.startsWith("/trending");
  const currentFilter = TRENDING_FILTER.find(
    (filter) => filter.value === params.filter,
  );

  return (
    <nav className="w-full flex justify-between items-center h-16 mb-8">
      <div className="flex items-center gap-4">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`flex items-center gap-2 p-2 ${
              pathname.startsWith(item.href)
                ? "text-primary border-b-2 border-primary"
                : "text-gray-500"
            }`}
          >
            <item.icon className="size-4" />
            {item.label}
          </Link>
        ))}
      </div>
      {isTrending && (
        <div className="flex items-center gap-2 bg-white border border-gray-500 rounded-sm px-2 py-1 text-sm">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 focus:outline-none">
              <span>{currentFilter?.label || "이번 주"}</span>
              <ChevronDown className="size-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {TRENDING_FILTER.map((filter) => (
                <DropdownMenuItem key={filter.value} asChild>
                  <Link href={`/trending/${filter.value}`}>{filter.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </nav>
  );
}
