"use client";

import WriteContainer from "@/components/common/WriteContainer";
import PostTag from "@/components/post/PostTag";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function WritePage() {
  const [tagItems, setTagItems] = useState<string[]>([]);
  const router = useRouter();

  return (
    <WriteContainer>
      <div className="w-1/2 bg-orange-100 flex flex-col gap-3 px-2 relative">
        {/* 제목 */}
        <input
          placeholder="제목을 입력하세요."
          className="w-full h-20 text-4xl font-bold focus:outline-none"
        />
        {/* 태그 */}
        <div className="flex gap-2 w-full">
          <div className="flex items-center gap-2 w-full flex-wrap">
            <div className="flex items-center gap-2 justify-start flex-wrap w-auto">
              {tagItems.map((tag, index) => (
                <PostTag
                  key={index}
                  tag={tag}
                  index={index}
                  tagItems={tagItems}
                  setTagItems={setTagItems}
                />
              ))}
            </div>
            <input
              placeholder="태그를 입력하세요."
              className="flex-1 w-full py-1 focus:outline-none"
              onKeyDown={(e) => {
                if (e.key === "Enter" && e.currentTarget.value.trim() !== "") {
                  e.preventDefault();
                  const newTag = e.currentTarget.value.trim().toLowerCase();
                  if (!tagItems.includes(newTag)) {
                    setTagItems([...tagItems, newTag]);
                  }
                  e.currentTarget.value = "";
                }
              }}
            />
          </div>
        </div>
        {/* 내용 */}
        <div>1234</div>
        {/* footer */}
        <div className="flex justify-between absolute bottom-2 left-0 right-0 px-2">
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
      </div>
      <div className="w-1/2 bg-green-500">호호</div>
    </WriteContainer>
  );
}
