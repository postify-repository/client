"use client";

import WriteContainer from "@/components/common/WriteContainer";
import PostTag from "@/components/post/PostTag";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import CodeMirror, { EditorView } from "@uiw/react-codemirror";
import Toolbar from "@/components/write/toolbar";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import { headingStyler } from "@/lib/editor/headingStyler";

export default function WritePage() {
  const [tagItems, setTagItems] = useState<string[]>([]);
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [code, setCode] = useState<string>("");
  const editorRef = useRef<EditorView | null>(null);
  const view = editorRef.current;
  const theme = EditorView.theme({
    "&.cm-focused": {
      outline: "none",
    },
    "&": {
      fontSize: "16px",
    },
    ".cm-heading": {
      fontWeight: "bold",
    },
    ".cm-heading-1": {
      fontSize: "2.5rem",
    },
    ".cm-heading-2": {
      fontSize: "2rem",
    },
    ".cm-heading-3": {
      fontSize: "1.5rem",
    },
    ".cm-heading-4": {
      fontSize: "1.25rem",
    },
  });
  return (
    <WriteContainer>
      <div className="w-1/2 flex flex-col gap-3 px-2 relative">
        {/* 제목 */}
        <input
          placeholder="제목을 입력하세요"
          className="w-full h-20 text-4xl font-bold focus:outline-none"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {/* 태그 */}
        <div className="flex gap-2 w-full">
          <div className="flex items-center gap-2 w-full">
            <div className="flex items-center gap-2 justify-start flex-wrap w-full">
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
                placeholder="태그를 입력하세요"
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
                  } else if (e.key === "Backspace" && tagItems.length > 0) {
                    setTagItems(tagItems.slice(0, -1));
                  }
                }}
              />
            </div>
          </div>
        </div>
        {/* 내용 */}
        <div>
          <Toolbar view={view!} />
          <div>
            <CodeMirror
              value={code}
              onChange={(value) => setCode(value)}
              placeholder="내용을 입력하세요"
              theme="none"
              maxHeight="65vh"
              basicSetup={{
                lineNumbers: false,
                foldGutter: false,
                highlightActiveLine: false,
                highlightSelectionMatches: false,
              }}
              extensions={[theme, headingStyler]}
              onCreateEditor={(view) => {
                editorRef.current = view;
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
      <div className="w-1/2 flex flex-col gap-3 px-2">
        <div className="w-full h-20 text-4xl font-bold flex items-center">
          {title}
        </div>
        <div className="markdown-viewer">
          <ReactMarkdown remarkPlugins={[remarkBreaks]}>{code}</ReactMarkdown>
        </div>
      </div>
    </WriteContainer>
  );
}
