"use client";

import ServerErrorMessage from "@/components/auth-modal/auth-form/ServerErrorMessage";
import SignupFormField from "@/components/signup-form/SignupFormField";
import SignupFormFooter from "@/components/signup-form/SignupFormFooter";
import { Form } from "@/components/ui/form";
import { SIGNUP_FORM_FIELDS } from "@/constants/signup";
import { useSignupForm } from "@/hooks/auth/useSignupForm";

export default function SignupForm() {
  const { form, onSubmit, isPending, handleCancel, emailFromUrl } =
    useSignupForm();

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5"
      >
        {emailFromUrl && <input type="hidden" {...form.register("email")} />}

        {SIGNUP_FORM_FIELDS.map((fieldConfig) => (
          <SignupFormField
            key={fieldConfig.name}
            control={form.control}
            name={fieldConfig.name}
            label={fieldConfig.label}
            placeholder={fieldConfig.placeholder}
            type={fieldConfig.type}
            errors={form.formState.errors}
          />
        ))}

        <ServerErrorMessage errors={form.formState.errors} />
        <SignupFormFooter onCancel={handleCancel} isSubmitting={isPending} />
      </form>
    </Form>
  );
}
