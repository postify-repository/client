interface WriteContainerProps {
  children: React.ReactNode;
}

export default function WriteContainer({ children }: WriteContainerProps) {
  return <div className="flex min-h-screen px-10 py-5 gap-1">{children}</div>;
}
