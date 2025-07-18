"use client";

import AuthForm from "@/components/auth-modal/auth-form";
import AuthModalFooter from "@/components/auth-modal/AuthModalFooter";
import AuthModalHeader from "@/components/auth-modal/AuthModalHeader";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";

interface AuthModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function AuthModal({ open, onOpenChange }: AuthModalProps) {
  const [mode, setMode] = useState<"login" | "signup">("login");

  const isLoginMode = mode === "login";

  const handleModeChange = (mode: "login" | "signup") => {
    setMode(mode);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="rounded-none flex flex-col justify-between bg-content pt-12 px-6">
        <AuthModalHeader isLoginMode={isLoginMode} />
        <AuthForm isLoginMode={isLoginMode} />
        <AuthModalFooter
          isLoginMode={isLoginMode}
          onModeChange={handleModeChange}
        />
      </DialogContent>
    </Dialog>
  );
}
