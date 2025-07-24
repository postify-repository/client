"use client";

import WriteContainer from "@/components/common/WriteContainer";
import PostTag from "@/components/post/PostTag";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Bold,
  Code,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Image,
  Italic,
  Link,
  Quote,
  Strikethrough,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";

export default function WritePage() {
  const [tagItems, setTagItems] = useState<string[]>([]);
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [code, setCode] = useState<string>("");

  return (
    <WriteContainer>
      <div className="w-1/2 bg-orange-100 flex flex-col gap-3 px-2 relative">
        {/* 제목 */}
        <input
          placeholder="제목을 입력하세요."
          className="w-full h-20 text-4xl font-bold focus:outline-none"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {/* 태그 */}
        <div className="flex gap-2 w-full">
          <div className="flex items-center gap-2 w-full">
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
              <input
                placeholder="태그를 입력하세요."
                className="flex-1 w-full py-1 focus:outline-none"
                onKeyDown={(e) => {
                  if (
                    e.key === "Enter" &&
                    e.currentTarget.value.trim() !== ""
                  ) {
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
        </div>
        {/* 내용 */}
        <div>
          <div
            id="toolbar"
            className="w-full flex flex-wrap gap-10 text-gray-500 items-center mb-5"
          >
            <div id="toolbar-heading" className="flex gap-2">
              <div className="flex items-center justify-center p-2 cursor-pointer hover:text-black hover:bg-gray-100/50">
                <Heading1 />
              </div>
              <div className="flex items-center justify-center p-2 cursor-pointer hover:text-black hover:bg-gray-100/50">
                <Heading2 />
              </div>
              <div className="flex items-center justify-center p-2 cursor-pointer hover:text-black hover:bg-gray-100/50">
                <Heading3 />
              </div>
              <div className="flex items-center justify-center p-2 cursor-pointer hover:text-black hover:bg-gray-100/50">
                <Heading4 />
              </div>
            </div>
            <div id="toolbar-word" className="flex gap-2">
              <div className="flex items-center justify-center p-2 cursor-pointer hover:text-black hover:bg-gray-100/50">
                <Bold />
              </div>
              <div className="flex items-center justify-center p-2 cursor-pointer hover:text-black hover:bg-gray-100/50">
                <Italic />
              </div>
              <div className="flex items-center justify-center p-2 cursor-pointer hover:text-black hover:bg-gray-100/50">
                <Strikethrough />
              </div>
            </div>
            <div id="toolbar-etc" className="flex gap-2">
              <div className="flex items-center justify-center p-2 cursor-pointer hover:text-black hover:bg-gray-100/50">
                <Quote />
              </div>
              <div className="flex items-center justify-center p-2 cursor-pointer hover:text-black hover:bg-gray-100/50">
                <Image />
              </div>
              <div className="flex items-center justify-center p-2 cursor-pointer hover:text-black hover:bg-gray-100/50">
                <Link />
              </div>
              <div className="flex items-center justify-center p-2 cursor-pointer hover:text-black hover:bg-gray-100/50">
                <Code />
              </div>
            </div>
          </div>
          <div>
            <CodeMirror
              value={code}
              onChange={(value) => setCode(value)}
              placeholder="내용을 입력하세요."
              theme="none"
              maxHeight="65vh"
              basicSetup={{
                lineNumbers: false,
                foldGutter: false,
                highlightActiveLine: false,
                highlightSelectionMatches: false,
              }}
            />
          </div>
        </div>
        {/* footer */}
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
      </div>
      <div className="w-1/2 bg-green-500 flex flex-col gap-3 px-2 ">
        <div className="tw-full h-20 text-4xl font-bold">{title}</div>
        <div className="text-lg">내용</div>
      </div>
    </WriteContainer>
  );
}
