import { authApi } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";

export const useCheckEmail = () => {
  return useMutation({
    mutationFn: (email: string) => authApi.checkEmail(email),
  });
};
