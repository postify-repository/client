import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export default function EmptyPostInfo() {
  return (
    <div className="flex flex-col items-center justify-center py-10 h-full">
      <Image
        src="/findAuthorImg.jpg"
        alt="empty-post"
        width={500}
        height={500}
        className="mb-10"
      />
      {/* Link 수정 예정 */}
      <Link href="/trending">
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
