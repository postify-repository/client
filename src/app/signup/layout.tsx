import MainContent from "@/components/common/MainContent";

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainContent>{children}</MainContent>;
}
