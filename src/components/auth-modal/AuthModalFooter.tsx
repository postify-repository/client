import ModeToggleButton from "@/components/auth-modal/ModeToggleButton";
import { DialogFooter } from "@/components/ui/dialog";
import { useModalStore } from "@/stores/modalStore";

export default function AuthModalFooter() {
  const { authModalMode, setAuthModalMode } = useModalStore();

  return (
    <DialogFooter>
      <div className="text-green flex justify-end gap-1 mt-32">
        {authModalMode === "login" ? (
          <>
            <span>아직 회원이 아니신가요?</span>
            <ModeToggleButton onClick={() => setAuthModalMode("signup")}>
              회원가입
            </ModeToggleButton>
          </>
        ) : (
          <>
            <span>계정이 이미 있으신가요?</span>
            <ModeToggleButton onClick={() => setAuthModalMode("login")}>
              로그인
            </ModeToggleButton>
          </>
        )}
      </div>
    </DialogFooter>
  );
}
