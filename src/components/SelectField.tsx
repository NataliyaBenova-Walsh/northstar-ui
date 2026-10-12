import { useId } from 'react';
import type { SelectHTMLAttributes } from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';
import { FormField } from './FormField';

type SelectOption = {
  value: string;
  label: string;
};

type SelectFieldProps = {
  label: string;
  hint?: string;
  error?: string;
  options: SelectOption[];
  registration: UseFormRegisterReturn;
} & Omit<SelectHTMLAttributes<HTMLSelectElement>, 'name'>;

export function SelectField({
  label,
  hint,
  error,
  options,
  registration,
  ...props
}: SelectFieldProps) {
  const errorId = useId();

  return (
    <FormField label={label} hint={hint} error={error} errorId={errorId}>
      <select
        {...registration}
        {...props}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-orange-300 focus:ring-4 focus:ring-orange-100"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </FormField>
  );
}

export type { SelectOption };
