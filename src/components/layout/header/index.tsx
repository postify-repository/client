"use client";

import LoginButton from "@/components/layout/header/login-button";
import Logo from "@/components/layout/header/logo";
import NotiIcon from "@/components/layout/header/noti-icon";
import Profile from "@/components/layout/header/profile";
import SearchIcon from "@/components/layout/header/search-icon";
import WriteButton from "@/components/layout/header/write-button";
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
