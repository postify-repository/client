import WriteContainer from "@/components/common/WriteContainer";
import { Button } from "@/components/ui/button";
import { ArrowBigLeft } from "lucide-react";

export default function WritePage() {
  return (
    <WriteContainer>
      <div className="w-1/2 bg-orange-100 flex flex-col gap-3">
        <input
          placeholder="제목을 입력하세요."
          className="w-full h-16 text-2xl font-bold px-2 bg-amber-500"
        />
        <div className="flex gap-2 px-2">
          <span className="text-lg font-bold w-10 flex items-center justify-center">
            태그
          </span>
          <input
            placeholder="태그를 입력하세요."
            className="w-full px-2 py-1 bg-amber-500"
          />
        </div>
        <textarea
          placeholder="내용을 입력하세요."
          className="w-full px-2 py-1 bg-amber-500"
        />
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <ArrowBigLeft />
            <span>뒤로가기</span>
          </div>
          <div className="flex gap-2">
            <Button>임시저장</Button>
            <Button>게시</Button>
          </div>
        </div>
      </div>

      <div className="w-1/2 bg-green-500">호호</div>
    </WriteContainer>
  );
}
