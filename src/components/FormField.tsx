import type { ReactNode } from 'react';

type FormFieldProps = {
  label: string;
  hint?: string;
  error?: string;
  errorId?: string;
  children: ReactNode;
};

export function FormField({ label, hint, error, errorId, children }: FormFieldProps) {
  return (
    <label className="block">
      <div className="mb-2 flex items-center justify-between gap-3">
        <span className="text-sm font-semibold text-slate-900">{label}</span>
        {hint ? <span className="text-xs text-slate-500">{hint}</span> : null}
      </div>
      {children}
      {error ? (
        <p id={errorId} role="alert" className="mt-2 text-sm text-red-600">
          {error}
        </p>
      ) : null}
    </label>
  );
}

export type { FormFieldProps };
