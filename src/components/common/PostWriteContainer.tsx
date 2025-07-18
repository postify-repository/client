export default function PostWriteContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex gap-4 w-full">{children}</div>;
}
