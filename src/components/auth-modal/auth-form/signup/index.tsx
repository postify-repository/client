"use client";

import AuthFormInput from "@/components/auth-modal/auth-form/AuthFormInput";
import ServerErrorMessage from "@/components/auth-modal/auth-form/ServerErrorMessage";
import SubmitButton from "@/components/auth-modal/auth-form/SubmitButton";
import { Form } from "@/components/ui/form";
import { useCheckEmailForm } from "@/hooks/auth/useCheckEmailForm";

export default function SignupForm() {
  const { form, onSubmit, isPending } = useCheckEmailForm();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex flex-col gap-4">
          <p className="font-semibold text-tertiary">이메일로 회원가입</p>

          <div className="flex gap-0">
            <AuthFormInput
              errors={form.formState.errors}
              name="email"
              type="email"
              placeholder="이메일을 입력하세요."
            />
            <SubmitButton
              isSubmitting={form.formState.isSubmitting || isPending}
              onSubmit={() => form.handleSubmit(onSubmit)}
            />
          </div>

          <ServerErrorMessage errors={form.formState.errors} />
        </div>
      </form>
    </Form>
  );
}
