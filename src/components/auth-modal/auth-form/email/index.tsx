"use client";

import EmailInput from "@/components/auth-modal/auth-form/email/EmailInput";
import ServerErrorMessage from "@/components/auth-modal/auth-form/email/ErrorMessage";
import SubmitButton from "@/components/auth-modal/auth-form/email/SubmitButton";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

interface EmailAuthSectionProps {
  isLoginMode: boolean;
}

// Zod 스키마 정의
const authFormSchema = z.object({
  email: z
    .email("올바른 이메일 형식을 입력해주세요.")
    .min(1, "이메일을 입력해주세요."),
});

type AuthFormData = z.infer<typeof authFormSchema>;

export default function EmailAuthSection({
  isLoginMode,
}: EmailAuthSectionProps) {
  // useForm 훅 설정
  const form = useForm<AuthFormData>({
    resolver: zodResolver(authFormSchema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: {
      email: "",
    },
  });

  // 폼 제출 성공 핸들러
  const onSubmit: SubmitHandler<AuthFormData> = async (data) => {
    console.log(data);
  };

  // 폼 제출 에러 핸들러
  const onError: SubmitErrorHandler<AuthFormData> = (errors) => {
    console.error("폼 검증 실패:", errors);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit, onError)}
        className="space-y-4"
      >
        <div className="flex flex-col gap-4">
          <p className="font-semibold text-tertiary">
            이메일로 {isLoginMode ? "로그인" : "회원가입"}
          </p>

          <div className="flex gap-0">
            <EmailInput control={form.control} errors={form.formState.errors} />
            <SubmitButton
              isLoginMode={isLoginMode}
              isSubmitting={form.formState.isSubmitting}
              onSubmit={() => form.handleSubmit(onSubmit)}
            />
          </div>

          <ServerErrorMessage errors={form.formState.errors} />
        </div>
      </form>
    </Form>
  );
}
