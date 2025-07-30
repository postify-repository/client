import { useLogin } from "@/hooks/auth/useLogin";
import { LoginFormData, LoginFormSchema } from "@/schemas/login.schema";
import { useModalStore } from "@/stores/modalStore";
import { zodResolver } from "@hookform/resolvers/zod";
import axios, { AxiosError } from "axios";
import { SubmitHandler, useForm } from "react-hook-form";

export const useLoginForm = () => {
  const loginMutation = useLogin();

  const form = useForm<LoginFormData>({
    resolver: zodResolver(LoginFormSchema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<LoginFormData> = (data) => {
    loginMutation.mutate(data, {
      onSuccess: () => {
        useModalStore.getState().closeAuthModal();
      },
      onError: (error) => {
        if (error instanceof AxiosError) {
          const errorMessage =
            error.response?.status === axios.HttpStatusCode.Unauthorized
              ? error.response?.data.message
              : "알 수 없는 오류가 발생했습니다.";

          form.setError("root.server", { message: errorMessage });
        }
      },
    });
  };

  return {
    form,
    onSubmit,
    ...loginMutation,
  };
};
