import { z } from "zod";

export const CheckEmailFormSchema = z.object({
  email: z
    .email("올바른 이메일 형식을 입력해주세요.")
    .min(1, "이메일을 입력해주세요."),
});

export type CheckEmailFormData = z.infer<typeof CheckEmailFormSchema>;
