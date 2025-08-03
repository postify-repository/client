"use client";

import WriteContainer from "@/components/common/WriteContainer";
import { useState } from "react";
import { EditorView } from "@uiw/react-codemirror";
import Toolbar from "@/components/editor/Toolbar";
import WriteEditor from "@/components/editor/WriteEditor";
import ViewerEditorTitle from "@/components/editor/ViewerEditorTitle";
import ViewerEditorContent from "@/components/editor/ViewerEditorContent";
import TitleInput from "@/components/editor/TitleInput";
import TagInput from "@/components/editor/TagInput";
import WriteEditorContainer from "@/components/common/WriteEditorContainer";
import WritePreviewContainer from "@/components/common/WritePreviewContainer";
import WriteFooter from "@/components/editor/WriteFooter";

export default function WritePage() {
  const [tagItems, setTagItems] = useState<string[]>([]);
  const [title, setTitle] = useState("");
  const [code, setCode] = useState<string>("");
  const [view, setView] = useState<EditorView | null>(null);
  return (
    <WriteContainer>
      <WriteEditorContainer>
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
        <WriteFooter />
      </WriteEditorContainer>
      <WritePreviewContainer>
        <ViewerEditorTitle title={title} />
        <ViewerEditorContent content={code} />
      </WritePreviewContainer>
    </WriteContainer>
  );
}
