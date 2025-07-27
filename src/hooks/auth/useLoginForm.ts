import { useLogin } from "@/hooks/auth/useLogin";
import { LoginFormData, LoginFormSchema } from "@/schemas/login.schema";
import { useModalStore } from "@/stores/modalStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
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
          const { message, field } = error.response?.data;
          form.setError(field, { message });
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
