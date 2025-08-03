"use client";

import WriteContainer from "@/components/common/WriteContainer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { EditorView } from "@uiw/react-codemirror";
import Toolbar from "@/components/editor/toolbar";
import WriteEditor from "@/components/editor/writeEditor";
import ViewerEditorTitle from "@/components/editor/viewerEditorTitle";
import ViewerEditorContent from "@/components/editor/viewerEditorContent";
import TitleInput from "@/components/editor/titleInput";
import TagInput from "@/components/editor/tagInput";

export default function WritePage() {
  const [tagItems, setTagItems] = useState<string[]>([]);
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [code, setCode] = useState<string>("");
  const [view, setView] = useState<EditorView | null>(null);
  return (
    <WriteContainer>
      <div className="w-1/2 flex flex-col gap-3 px-2 relative">
        <TitleInput title={title} setTitle={setTitle} />
        <TagInput tagItems={tagItems} setTagItems={setTagItems} />
        <div>
          <Toolbar view={view!} />
          <WriteEditor
            code={code}
            setCode={setCode}
            onInitView={(view) => setView(view)}
          />
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
        <ViewerEditorTitle title={title} />
        <ViewerEditorContent content={code} />
      </div>
    </WriteContainer>
  );
}
