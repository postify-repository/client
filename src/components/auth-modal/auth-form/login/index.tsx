"use client";

import AuthFormInput from "@/components/auth-modal/auth-form/AuthFormInput";
import ServerErrorMessage from "@/components/auth-modal/auth-form/ServerErrorMessage";
import SubmitButton from "@/components/auth-modal/auth-form/SubmitButton";
import { Form } from "@/components/ui/form";
import { useLoginForm } from "@/hooks/auth/useLoginForm";

export default function LoginForm() {
  const { form, onSubmit, isPending } = useLoginForm();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex flex-col gap-3">
          <p className="font-semibold text-tertiary">이메일로 로그인</p>

          <AuthFormInput
            errors={form.formState.errors}
            name="email"
            type="email"
            placeholder="이메일을 입력하세요."
          />
          <AuthFormInput
            errors={form.formState.errors}
            name="password"
            type="password"
            placeholder="비밀번호를 입력하세요."
          />

          <SubmitButton
            isSubmitting={form.formState.isSubmitting || isPending}
            onSubmit={() => form.handleSubmit(onSubmit)}
          />

          <ServerErrorMessage errors={form.formState.errors} />
        </div>
      </form>
    </Form>
  );
}
