"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const onComparePage = pathname === "/compare";

  return (
    <header className="sticky top-0 z-[20] border-b border-gray-200/60 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500 transition-colors group-hover:bg-brand-600">
            <ShoppingCart size={16} className="text-white" />
          </div>
          <span className="text-lg font-bold text-ink">
            Grocery<span className="text-brand-500">Guru</span>
          </span>
        </Link>

        {/* Nav */}
        <nav className="flex items-center gap-2">
          {onComparePage ? (
            <Link
              href="/"
              className="text-sm font-medium text-subtle hover:text-ink transition-colors px-3 py-1.5"
            >
              ← Back to home
            </Link>
          ) : (
            <Link
              href="/compare"
              className="inline-flex items-center gap-1.5 rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
            >
              Compare prices
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
