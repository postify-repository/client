interface WriteEditorContainerProps {
  children: React.ReactNode;
}

export default function WriteEditorContainer({
  children,
}: WriteEditorContainerProps) {
  return (
    <div className="w-1/2 flex flex-col gap-3 px-2 relative">{children}</div>
  );
}
