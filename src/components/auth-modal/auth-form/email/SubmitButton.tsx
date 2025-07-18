import { Button } from "@/components/ui/button";

interface SubmitButtonProps {
  isLoginMode: boolean;
  isSubmitting: boolean;
  onSubmit: () => void;
}

export default function SubmitButton({
  isLoginMode,
  isSubmitting,
  onSubmit,
}: SubmitButtonProps) {
  return (
    <Button
      onClick={onSubmit}
      disabled={isSubmitting}
      className="bg-green hover:bg-green/90 text-content font-bold disabled:opacity-50 rounded-none h-12 cursor-pointer"
    >
      {isSubmitting ? "처리중..." : isLoginMode ? "로그인" : "회원가입"}
    </Button>
  );
}
