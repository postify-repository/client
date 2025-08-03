interface WritePreviewContainerProps {
  children: React.ReactNode;
}

export default function WritePreviewContainer({
  children,
}: WritePreviewContainerProps) {
  return <div className="w-1/2 flex flex-col gap-3 px-2">{children}</div>;
}
