import { ButtonHTMLAttributes, forwardRef } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-brand-500 text-white hover:bg-brand-600 disabled:bg-muted disabled:text-subtle disabled:cursor-not-allowed shadow-sm",
  secondary:
    "bg-surface text-ink border border-border hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed shadow-sm",
  ghost:
    "bg-transparent text-subtle hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className = "", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`
          inline-flex items-center justify-center gap-2 rounded-lg font-semibold
          transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2
          focus-visible:ring-brand-500 focus-visible:ring-offset-2
          ${variantClasses[variant]}
          ${sizeClasses[size]}
          ${className}
        `}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
