"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control, FieldErrors, FieldPath, FieldValues } from "react-hook-form";

interface FormFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
  label: string;
  placeholder: string;
  type?: "text" | "email" | "password";
  errors: FieldErrors<T>;
}

export default function SignupFormField<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  type = "text",
  errors,
}: FormFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="group">
          <FormLabel className="text-lg font-bold group-focus-within:text-green transition-colors">
            {label}
          </FormLabel>
          <FormControl>
            <Input
              type={type}
              placeholder={placeholder}
              {...field}
              className="border-0 focus-visible:ring-0 shadow-none border-b border-b-medium rounded-none placeholder:text-tertiary text-lg md:text-2xl px-1 py-5 focus:!border-b-green transition-colors"
              aria-invalid={!!errors[name]}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
