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
