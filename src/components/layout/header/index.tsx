"use client";

import AuthModal from "@/components/auth-modal";
import LoginButton from "@/components/layout/header/LoginButton";
import Logo from "@/components/layout/header/Logo";
import NotiIcon from "@/components/layout/header/NotiIcon";
import Profile from "@/components/layout/header/Profile";
import SearchIcon from "@/components/layout/header/SearchIcon";
import WriteButton from "@/components/layout/header/WriteButton";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const pathname = usePathname();
  const hiddenHeaderRoutes = ["/write", "/edit"];
  const isHiddenHeader = hiddenHeaderRoutes.includes(pathname);

  return (
    <>
      {isHiddenHeader ? null : (
        <header className="w-full h-16 flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-2">
            <NotiIcon
              isLoggedIn={isLoggedIn}
              onLoginRequired={() => setIsAuthModalOpen(true)}
            />
            <SearchIcon />

            {isLoggedIn ? (
              <>
                <WriteButton />
                <Profile />
              </>
            ) : (
              <LoginButton
                onClick={() => {
                  setIsLoggedIn(true);
                  setIsAuthModalOpen(true);
                }}
              />
            )}
          </div>
        </header>
      )}

      <AuthModal open={isAuthModalOpen} onOpenChange={setIsAuthModalOpen} />
    </>
  );
}
