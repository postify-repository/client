import { Button } from "@/components/ui/button";
import { useModalStore } from "@/stores/modalStore";

export default function SubmitButton({
  isSubmitting,
  onSubmit,
}: {
  isSubmitting: boolean;
  onSubmit: () => void;
}) {
  const { authModalMode } = useModalStore();

  return (
    <Button
      onClick={onSubmit}
      disabled={isSubmitting}
      className="bg-green hover:bg-green/90 text-content font-bold disabled:opacity-50 rounded-none h-12 cursor-pointer"
    >
      {isSubmitting
        ? "처리중..."
        : authModalMode === "login"
          ? "로그인"
          : "회원가입"}
    </Button>
  );
}
