import GitHub from "@/components/auth-modal/auth-form/social/logo/GitHub";
import Google from "@/components/auth-modal/auth-form/social/logo/Google";
import Naver from "@/components/auth-modal/auth-form/social/logo/Naver";
import { useModalStore } from "@/stores/modalStore";

export default function SocialAuthSection() {
  const { authModalMode } = useModalStore();

  return (
    <div className="flex flex-col gap-4 mt-6">
      <p className="font-semibold text-tertiary">
        소셜 계정으로 {authModalMode === "login" ? "로그인" : "회원가입"}
      </p>
      <div className="flex justify-around">
        <GitHub />
        <Google />
        <Naver />
      </div>
    </div>
  );
}
