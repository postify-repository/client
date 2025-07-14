"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface ReadFilterButtonProps {
  href: string;
  children: React.ReactNode;
}

export default function ReadFilterButton({
  href,
  children,
}: ReadFilterButtonProps) {
  const pathname = usePathname();

  const isActive = pathname === href;
  const baseStyle =
    "text-md px-4 py-2 rounded-2xl font-semibold cursor-pointer";
  const activeStyle = "bg-gray-green text-green";
  const inactiveStyle = "bg-gray-100 text-tertiary";

  return (
    <Link
      href={href}
      className={`${baseStyle} ${isActive ? activeStyle : inactiveStyle}`}
    >
      {children}
    </Link>
  );
}
