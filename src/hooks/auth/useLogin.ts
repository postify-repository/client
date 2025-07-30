import { authApi } from "@/api/auth";
import { LoginFormData } from "@/schemas/login.schema";
import { useAuthStore } from "@/stores/authStore";
import { useMutation } from "@tanstack/react-query";

export const useLogin = () => {
  return useMutation({
    mutationFn: (data: LoginFormData) => authApi.login(data),
    onSuccess: (response) => {
      useAuthStore.getState().login(response);
    },
  });
};
