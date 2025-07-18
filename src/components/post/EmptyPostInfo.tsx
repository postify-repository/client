import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function EmptyPostInfo() {
  return (
    <div className="flex flex-col items-center justify-center py-10 h-full gap-10">
      <Image
        src="/findAuthorImg.svg"
        alt="empty-post"
        width={400}
        height={400}
      />
      <Link href="/authors">
        <Button
          variant="outline"
          className="w-40 bg-menu-hover-text text-white font-bold"
        >
          인기 작가 찾아보기
        </Button>
      </Link>
    </div>
  );
}
