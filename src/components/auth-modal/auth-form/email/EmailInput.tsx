import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control, FieldErrors } from "react-hook-form";

interface EmailInputProps {
  control: Control<{ email: string }>;
  errors: FieldErrors<{ email: string }>;
}

export default function EmailInput({ control, errors }: EmailInputProps) {
  return (
    <FormField
      control={control}
      name="email"
      render={({ field }) => (
        <FormItem className="flex-1">
          <FormControl>
            <Input
              type="email"
              placeholder="이메일을 입력하세요."
              {...field}
              className="shadow-none rounded-none placeholder:text-tertiary placeholder:text-md h-12 focus-visible:ring-0 focus:border-green focus-visible:border-green"
              aria-invalid={!!errors.email}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
