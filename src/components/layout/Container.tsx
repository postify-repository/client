import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="max-w-screen-xl mx-auto relative px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
}
