import { HTMLAttributes } from "react";

type BadgeVariant = "green" | "red" | "gray" | "yellow" | "blue";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantClasses: Record<BadgeVariant, string> = {
  green:  "bg-green-100 text-green-800 border border-green-200",
  red:    "bg-red-100 text-red-800 border border-red-200",
  gray:   "bg-gray-100 text-gray-600 border border-gray-200",
  yellow: "bg-yellow-100 text-yellow-800 border border-yellow-200",
  blue:   "bg-blue-100 text-blue-800 border border-blue-200",
};

export function Badge({ variant = "gray", className = "", children, ...props }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
