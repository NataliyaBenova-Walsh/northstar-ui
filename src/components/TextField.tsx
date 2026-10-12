import { useId } from 'react';
import type { InputHTMLAttributes } from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';
import { FormField } from './FormField';

type TextFieldProps = {
  label: string;
  hint?: string;
  error?: string;
  registration: UseFormRegisterReturn;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'name'>;

export function TextField({ label, hint, error, registration, ...props }: TextFieldProps) {
  const errorId = useId();

  return (
    <FormField label={label} hint={hint} error={error} errorId={errorId}>
      <input
        {...registration}
        {...props}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-orange-300 focus:ring-4 focus:ring-orange-100"
      />
    </FormField>
  );
}
