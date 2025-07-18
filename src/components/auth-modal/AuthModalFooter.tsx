import ModeToggleButton from "@/components/auth-modal/ModeToggleButton";
import { DialogFooter } from "@/components/ui/dialog";

interface AuthModalFooterProps {
  isLoginMode: boolean;
  onModeChange: (mode: "login" | "signup") => void;
}

export default function AuthModalFooter({
  isLoginMode,
  onModeChange,
}: AuthModalFooterProps) {
  return (
    <DialogFooter>
      <div className="text-green flex justify-end gap-1 mt-32">
        {isLoginMode ? (
          <>
            <span>아직 회원이 아니신가요?</span>
            <ModeToggleButton onClick={() => onModeChange("signup")}>
              회원가입
            </ModeToggleButton>
          </>
        ) : (
          <>
            <span>계정이 이미 있으신가요?</span>
            <ModeToggleButton onClick={() => onModeChange("login")}>
              로그인
            </ModeToggleButton>
          </>
        )}
      </div>
    </DialogFooter>
  );
}
