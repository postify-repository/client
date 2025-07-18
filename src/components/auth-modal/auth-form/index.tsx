"use client";

import EmailAuthSection from "@/components/auth-modal/auth-form/email";
import SocialAuthSection from "@/components/auth-modal/auth-form/social";

interface AuthFormProps {
  isLoginMode: boolean;
}

export default function AuthForm({ isLoginMode }: AuthFormProps) {
  return (
    <>
      <EmailAuthSection isLoginMode={isLoginMode} />
      <SocialAuthSection isLoginMode={isLoginMode} />
    </>
  );
}
