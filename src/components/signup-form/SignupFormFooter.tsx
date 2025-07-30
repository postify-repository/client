import { Button } from "@/components/ui/button";

interface FormButtonsProps {
  onCancel?: () => void;
  isSubmitting?: boolean;
}

export default function SignupFormFooter({
  onCancel,
  isSubmitting = false,
}: FormButtonsProps) {
  return (
    <footer className="flex gap-4 mt-10">
      <Button
        type="button"
        onClick={onCancel}
        className="bg-light text-primary font-bold text-2xl rounded-3xl px-8 py-6 shadow-none hover:bg-light/70 cursor-pointer"
      >
        취소
      </Button>
      <Button
        type="submit"
        disabled={isSubmitting}
        className="bg-green text-white font-bold text-2xl rounded-3xl px-8 py-6 shadow-none hover:bg-green/90 cursor-pointer disabled:opacity-50"
      >
        {isSubmitting ? "가입 중..." : "가입"}
      </Button>
    </footer>
  );
}
