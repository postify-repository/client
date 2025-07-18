import { Button } from "@/components/ui/button";

interface ModeToggleButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export default function ModeToggleButton({
  onClick,
  children,
}: ModeToggleButtonProps) {
  return (
    <Button
      onClick={onClick}
      className="font-semibold cursor-pointer text-green bg-transparent shadow-none hover:bg-transparent p-0 h-fit text-md"
      variant="link"
    >
      {children}
    </Button>
  );
}
