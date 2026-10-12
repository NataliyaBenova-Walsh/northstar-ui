import type { InputHTMLAttributes } from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';

type CheckboxFieldProps = {
  label: string;
  description: string;
  registration: UseFormRegisterReturn;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'name' | 'type'>;

export function CheckboxField({
  label,
  description,
  registration,
  ...props
}: CheckboxFieldProps) {
  return (
    <label className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
      <input
        {...registration}
        {...props}
        type="checkbox"
        className="mt-1 h-4 w-4 rounded border-slate-300 text-orange-600 focus:ring-orange-300"
      />
      <div>
        <p className="text-sm font-semibold text-slate-900">{label}</p>
        <p className="mt-1 text-sm leading-6 text-slate-600">{description}</p>
      </div>
    </label>
  );
}
