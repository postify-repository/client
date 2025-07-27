import { FieldErrors, FieldValues } from "react-hook-form";

interface ServerErrorMessageProps {
  errors: FieldErrors<FieldValues>;
}

export default function ServerErrorMessage({
  errors,
}: ServerErrorMessageProps) {
  if (!errors.root?.server) {
    return null;
  }

  return (
    <p className="text-sm text-red-500" role="alert">
      {errors.root.server.message}
    </p>
  );
}
