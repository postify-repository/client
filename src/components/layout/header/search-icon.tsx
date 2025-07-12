import { Search } from "lucide-react";
import Link from "next/link";

export default function SearchIcon() {
  return (
    <Link
      href="/search"
      className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-gray-100"
    >
      <Search className="h-6 w-6" />
    </Link>
  );
}
