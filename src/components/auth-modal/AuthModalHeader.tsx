import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useModalStore } from "@/stores/modalStore";

export default function AuthModalHeader() {
  const { authModalMode } = useModalStore();

  return (
    <DialogHeader>
      <DialogTitle className="text-xl mb-4">
        {authModalMode === "login" ? "로그인" : "회원가입"}
      </DialogTitle>
    </DialogHeader>
  );
}
