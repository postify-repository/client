import GitHub from "@/components/auth-modal/auth-form/social/logo/GitHub";
import Google from "@/components/auth-modal/auth-form/social/logo/Google";
import Naver from "@/components/auth-modal/auth-form/social/logo/Naver";

interface SocialAuthSectionProps {
  isLoginMode: boolean;
}

export default function SocialAuthSection({
  isLoginMode,
}: SocialAuthSectionProps) {
  return (
    <div className="flex flex-col gap-4 mt-6">
      <p className="font-semibold text-tertiary">
        소셜 계정으로 {isLoginMode ? "로그인" : "회원가입"}
      </p>
      <div className="flex justify-around">
        <GitHub />
        <Google />
        <Naver />
      </div>
    </div>
  );
}
