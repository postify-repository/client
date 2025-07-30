import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FieldErrors, useFormContext } from "react-hook-form";

interface AuthFormInputProps {
  errors: FieldErrors;
  name: string;
  type: string;
  placeholder: string;
}

export default function AuthFormInput({
  errors,
  name,
  type,
  placeholder,
}: AuthFormInputProps) {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-1">
          <FormControl>
            <Input
              type={type}
              placeholder={placeholder}
              {...field}
              className="shadow-none rounded-none placeholder:text-tertiary placeholder:text-md h-12 focus-visible:ring-0 focus:border-green focus-visible:border-green"
              aria-invalid={!!errors[name]}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
