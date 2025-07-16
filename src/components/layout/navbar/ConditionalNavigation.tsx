"use client";

import { usePathname } from "next/navigation";
import { Navigation } from "./index";

export default function ConditionalNavigation() {
  const pathname = usePathname();
  const validPaths = ["/trending", "/recent", "/feed"];
  const isPathValid = validPaths.some((path) => pathname.startsWith(path));

  if (!isPathValid) {
    return null;
  }

  return <Navigation />;
}
