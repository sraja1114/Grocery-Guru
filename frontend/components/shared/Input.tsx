import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = "", id, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={id} className="block text-sm font-medium text-ink mb-1">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          className={`
            w-full rounded-lg border px-4 py-2.5 text-sm text-ink bg-surface
            placeholder:text-subtle
            border-border focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20
            outline-none transition-colors duration-150
            ${error ? "border-red-400 focus:border-red-500 focus:ring-red-500/20" : ""}
            ${className}
          `}
          {...props}
        />
        {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
