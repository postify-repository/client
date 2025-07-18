import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

interface DropdownItem {
  label: string;
  value: string;
}

interface DropdownProps {
  items: DropdownItem[];
  trigger: string;
}
/**
 * 드롭다운 메뉴 컴포넌트
 * @interface DropdownItem - {label: string, value: string}
 * @param {DropdownItem[]} items - 드롭다운 메뉴 아이템 배열
 * @param {string} trigger - 드롭다운 트리거 텍스트
 * @returns 드롭다운 메뉴 컴포넌트
 */
export default function Dropdown({ items, trigger }: DropdownProps) {
  return (
    <div className="flex items-center gap-2 bg-white border border-gray-500 rounded-sm px-2 py-1 text-sm">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-1 focus:outline-none">
          <span>{trigger}</span>
          <ChevronDown className="size-3" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {items.map((item) => (
            <DropdownMenuItem key={item.value} asChild>
              <Link href={`/trending/${item.value}`}>{item.label}</Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
