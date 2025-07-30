"use client";

import AuthModal from "@/components/auth-modal";
import LoginButton from "@/components/layout/header/LoginButton";
import Logo from "@/components/layout/header/Logo";
import NotiIcon from "@/components/layout/header/NotiIcon";
import Profile from "@/components/layout/header/Profile";
import SearchIcon from "@/components/layout/header/SearchIcon";
import WriteButton from "@/components/layout/header/WriteButton";
import { useAuthStore } from "@/stores/authStore";
import { useModalStore } from "@/stores/modalStore";
import { usePathname } from "next/navigation";

const HIDDEN_HEADER_PATHS = ["/signup"];

export default function Header() {
  const pathname = usePathname();
  const { isAuthenticated } = useAuthStore();
  const { openAuthModal } = useModalStore();

  if (HIDDEN_HEADER_PATHS.includes(pathname)) {
    return null;
  }

  return (
    <>
      <header className="w-full h-16 flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-2">
          <NotiIcon
            isLoggedIn={isAuthenticated}
            onLoginRequired={() => openAuthModal("login")}
          />
          <SearchIcon />

          {isAuthenticated ? (
            <>
              <WriteButton />
              <Profile />
            </>
          ) : (
            <LoginButton
              onClick={() => {
                openAuthModal("login");
              }}
            />
          )}
        </div>
      </header>

      <AuthModal />
    </>
  );
}
