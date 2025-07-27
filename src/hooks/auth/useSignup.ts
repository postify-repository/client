import { authApi } from "@/api/auth";
import { SignupFormData } from "@/schemas/signup.schema";
import { useMutation } from "@tanstack/react-query";

export const useSignup = () => {
  return useMutation({
    mutationFn: (data: SignupFormData) => authApi.signup(data),
  });
};
