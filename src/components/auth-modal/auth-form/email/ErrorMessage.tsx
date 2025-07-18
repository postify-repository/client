import { FormField, FormMessage } from "@/components/ui/form";
import { Control, FieldErrors } from "react-hook-form";

interface ErrorMessageProps {
  control: Control<{ email: string }>;
  errors: FieldErrors<{ email: string }>;
}

export default function ErrorMessage({ control, errors }: ErrorMessageProps) {
  return (
    <>
      {/* 필드 에러 메시지 */}
      <FormField
        control={control}
        name="email"
        render={() => <FormMessage />}
      />

      {/* 서버 에러 메시지 */}
      {errors.root?.server && (
        <p className="text-sm text-red-500" role="alert">
          {errors.root.server.message}
        </p>
      )}
    </>
  );
}
