import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function WriteFooter() {
  const router = useRouter();
  return (
    <div className="flex justify-between absolute bottom-3 left-0 right-0 px-2">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => router.back()}
      >
        <ArrowLeft />
        <span>뒤로가기</span>
      </div>
      <div className="flex gap-2">
        <Button className="bg-transparent text-green font-bold text-lg">
          임시저장
        </Button>
        <Button className="bg-green-500 text-white font-bold text-lg">
          출간하기
        </Button>
      </div>
    </div>
  );
}
