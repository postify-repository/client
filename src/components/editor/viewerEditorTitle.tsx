interface viewerEditorTitleProps {
  title: string;
}

export default function ViewerEditorTitle({ title }: viewerEditorTitleProps) {
  return (
    <div>
      <div className="w-full h-20 text-4xl font-bold flex items-center">
        {title}
      </div>
    </div>
  );
}
