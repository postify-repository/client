"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HEADER_DROPDOWN_MENU_ITEMS } from "@/constants/header-dropdown";
import { ChevronDownIcon } from "lucide-react";
import Link from "next/link";

export default function Profile() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center gap-2 cursor-pointer ml-3 group">
          <button className="h-10 w-10 rounded-full bg-gray-400 cursor-pointer" />
          <ChevronDownIcon className="size-4 text-tertiary group-hover:text-primary" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-48 p-0 rounded-none"
        align="end"
        sideOffset={16}
      >
        {HEADER_DROPDOWN_MENU_ITEMS.map((item) => (
          <DropdownMenuItem
            key={item.label}
            className="cursor-pointer p-3 text-md hover:!bg-menu-hover-bg hover:!text-menu-hover-text transition-colors"
            asChild
          >
            <Link href={item.href}>{item.label}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
