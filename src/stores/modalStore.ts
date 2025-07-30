import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface ModalState {
  isAuthModalOpen: boolean;
  authModalMode: "login" | "signup";
}

interface ModalActions {
  openAuthModal: (mode?: "login" | "signup") => void;
  closeAuthModal: () => void;
  setAuthModalMode: (mode: "login" | "signup") => void;
}

export const useModalStore = create<ModalState & ModalActions>()(
  immer((set) => ({
    isAuthModalOpen: false,
    authModalMode: "login",

    openAuthModal: (mode = "login") => {
      set((state) => {
        state.isAuthModalOpen = true;
        state.authModalMode = mode;
      });
    },

    closeAuthModal: () => {
      set((state) => {
        state.isAuthModalOpen = false;
      });
    },

    setAuthModalMode: (mode: "login" | "signup") => {
      set((state) => {
        state.authModalMode = mode;
      });
    },
  })),
);
