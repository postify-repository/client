import { headingStyler } from "@/lib/editor/headingStyler";
import { textStyler } from "@/lib/editor/textStyler";
import CodeMirror, { EditorView } from "@uiw/react-codemirror";
import { useRef } from "react";

interface writeEditorProps {
  code: string;
  setCode: (value: string) => void;
  onInitView: (view: EditorView) => void;
}

const writeTheme = EditorView.theme({
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
  ".cm-italic": {
    fontStyle: "italic",
  },
  ".cm-bold": {
    fontWeight: "bold",
  },
});

export default function WriteEditor({
  code,
  setCode,
  onInitView,
}: writeEditorProps) {
  const editorRef = useRef<EditorView | null>(null);
  return (
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
        extensions={[writeTheme, headingStyler, textStyler]}
        onCreateEditor={(view) => {
          editorRef.current = view;
          onInitView(view);
        }}
      />
    </div>
  );
}
