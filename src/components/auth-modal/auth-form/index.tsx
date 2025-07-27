"use client";

import LoginForm from "@/components/auth-modal/auth-form/login";
import SignupForm from "@/components/auth-modal/auth-form/signup";
import SocialAuthSection from "@/components/auth-modal/auth-form/social";
import { useModalStore } from "@/stores/modalStore";

export default function AuthForm() {
  const { authModalMode } = useModalStore();

  return (
    <>
      {authModalMode === "login" ? <LoginForm /> : <SignupForm />}
      <SocialAuthSection />
    </>
  );
}
