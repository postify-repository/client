import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";

interface viewerEditorContentProps {
  content: string;
}

export default function ViewerEditorContent({
  content,
}: viewerEditorContentProps) {
  return (
    <div className="markdown-viewer">
      <ReactMarkdown remarkPlugins={[remarkBreaks, remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
