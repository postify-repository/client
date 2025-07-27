import { User } from "@/types/api/user";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

interface AuthActions {
  login: (userData: User) => void;
  logout: () => void;
  getToken: () => string | null;
  setToken: (token: string) => void;
  removeToken: () => void;
}

export const useAuthStore = create<AuthState & AuthActions>()(
  persist(
    immer((set, get) => ({
      user: null,
      isAuthenticated: false,

      login: (userData: User) => {
        set((state) => {
          state.user = userData;
          state.isAuthenticated = true;
        });
      },

      logout: () => {
        set((state) => {
          state.user = null;
          state.isAuthenticated = false;
        });
      },
      getToken: () => {
        const state = get();
        return state.user?.accessToken || null;
      },

      setToken: (token: string) => {
        set((state) => {
          if (state.user) {
            state.user.accessToken = token;
          }
        });
      },

      removeToken: () => {
        set((state) => {
          state.user = null;
          state.isAuthenticated = false;
        });
      },
    })),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    },
  ),
);
