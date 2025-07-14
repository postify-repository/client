"use client";

import LoginButton from "@/components/layout/header/LoginButton";
import Logo from "@/components/layout/header/Logo";
import NotiIcon from "@/components/layout/header/NotiIcon";
import Profile from "@/components/layout/header/Profile";
import SearchIcon from "@/components/layout/header/SearchIcon";
import WriteButton from "@/components/layout/header/WriteButton";
import LoginModal from "@/components/login-modal";
import { useState } from "react";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <>
      <header className="w-full h-16 flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-2">
          <NotiIcon
            isLoggedIn={isLoggedIn}
            onLoginRequired={() => setIsLoginModalOpen(true)}
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
                setIsLoginModalOpen(true);
              }}
            />
          )}
        </div>
      </header>

      <LoginModal open={isLoginModalOpen} onOpenChange={setIsLoginModalOpen} />
    </>
  );
}
