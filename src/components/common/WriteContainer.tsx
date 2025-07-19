interface WriteContainerProps {
  children: React.ReactNode;
}

export default function WriteContainer({ children }: WriteContainerProps) {
  return <div className="flex min-h-screen p-10 gap-1">{children}</div>;
}
