import { DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface AuthModalHeaderProps {
  isLoginMode: boolean;
}

export default function AuthModalHeader({ isLoginMode }: AuthModalHeaderProps) {
  return (
    <DialogHeader>
      <DialogTitle className="text-xl mb-4">
        {isLoginMode ? "로그인" : "회원가입"}
      </DialogTitle>
    </DialogHeader>
  );
}
