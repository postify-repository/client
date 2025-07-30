import { useSignup } from "@/hooks/auth/useSignup";
import { SignupFormData, SignupFormSchema } from "@/schemas/signup.schema";
import { useModalStore } from "@/stores/modalStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export const useSignupForm = () => {
  const router = useRouter();
  const signupMutation = useSignup();
  const searchParams = useSearchParams();
  const emailFromUrl = searchParams.get("email");

  const form = useForm<SignupFormData>({
    resolver: zodResolver(SignupFormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      nickname: "",
      bio: "",
    },
  });

  useEffect(() => {
    if (emailFromUrl) {
      form.setValue("email", emailFromUrl);
    }
  }, [emailFromUrl, form]);

  const onSubmit: SubmitHandler<SignupFormData> = (data) => {
    signupMutation.mutate(data, {
      onSuccess: () => {
        router.push("/");
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

  const handleCancel = () => {
    form.reset();
    router.push("/");
  };

  return {
    ...signupMutation,
    form,
    onSubmit,
    handleCancel,
    emailFromUrl,
  };
};
