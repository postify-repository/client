interface MainContentProps {
  children: React.ReactNode;
}

export default function MainContent({ children }: MainContentProps) {
  return (
    <div className="flex flex-col gap-4 mt-30 mx-auto max-w-screen-md">
      {children}
    </div>
  );
}
