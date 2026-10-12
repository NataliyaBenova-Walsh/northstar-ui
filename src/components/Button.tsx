type ButtonProps = {
  label: string;
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
};

export function Button({
  label,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  type = 'button',
  className = '',
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center rounded-full font-bold transition duration-150 focus-visible:outline-3 focus-visible:outline-offset-3 disabled:cursor-not-allowed disabled:opacity-55';

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-3 text-[0.98rem]',
    lg: 'px-6 py-4 text-lg',
  };

  const variantClasses = {
    primary:
      'bg-linear-to-br from-orange-600 to-amber-500 text-white shadow-[0_14px_30px_rgba(234,88,12,0.28)] hover:not-disabled:-translate-y-px focus-visible:outline-orange-300',
    secondary:
      'border border-orange-200 bg-white text-orange-800 shadow-[0_12px_26px_rgba(148,163,184,0.18)] hover:not-disabled:-translate-y-px focus-visible:outline-orange-300',
    danger:
      'bg-linear-to-br from-red-700 to-red-500 text-white shadow-[0_14px_30px_rgba(185,28,28,0.25)] hover:not-disabled:-translate-y-px focus-visible:outline-red-300',
  };

  return (
      <button
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export type { ButtonProps };
