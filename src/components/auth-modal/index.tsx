"use client";

import AuthForm from "@/components/auth-modal/auth-form";
import AuthModalFooter from "@/components/auth-modal/AuthModalFooter";
import AuthModalHeader from "@/components/auth-modal/AuthModalHeader";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useModalStore } from "@/stores/modalStore";

export default function AuthModal() {
  const { isAuthModalOpen, closeAuthModal } = useModalStore();

  return (
    <Dialog open={isAuthModalOpen} onOpenChange={closeAuthModal}>
      <DialogContent className="rounded-none flex flex-col justify-between bg-content pt-12 px-6">
        <AuthModalHeader />
        <AuthForm />
        <AuthModalFooter />
      </DialogContent>
    </Dialog>
  );
}
