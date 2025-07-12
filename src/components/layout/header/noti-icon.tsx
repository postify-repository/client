import { Bell } from "lucide-react";
import Link from "next/link";

interface NotiIconProps {
  isLoggedIn: boolean;
  onLoginRequired?: () => void;
}

export default function NotiIcon({
  isLoggedIn,
  onLoginRequired,
}: NotiIconProps) {
  const handleClick = (e: React.MouseEvent) => {
    if (!isLoggedIn) {
      e.preventDefault();
      onLoginRequired?.();
    }
  };

  return (
    <Link
      href="/notifications"
      className="flex h-10 w-10 items-center justify-center rounded-full text-gray-700 transition-colors hover:bg-gray-100"
      onClick={handleClick}
    >
      <Bell className="h-6 w-6" />
    </Link>
  );
}
