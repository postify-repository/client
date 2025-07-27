import { useCheckEmail } from "@/hooks/auth/useCheckEmail";
import {
  CheckEmailFormData,
  CheckEmailFormSchema,
} from "@/schemas/check-email.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

export const useCheckEmailForm = () => {
  const router = useRouter();
  const checkEmailMutation = useCheckEmail();

  const form = useForm<CheckEmailFormData>({
    resolver: zodResolver(CheckEmailFormSchema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: {
      email: "",
    },
  });

  const onSubmit: SubmitHandler<CheckEmailFormData> = (data) => {
    checkEmailMutation.mutate(data.email, {
      onSuccess: () => {
        router.push(`/signup?email=${encodeURIComponent(data.email)}`);
      },
      onError: (error) => {
        if (axios.isAxiosError(error)) {
          form.setError("email", {
            message: error.response?.data.message,
          });
        }
      },
    });
  };

  return { form, onSubmit, ...checkEmailMutation };
};
