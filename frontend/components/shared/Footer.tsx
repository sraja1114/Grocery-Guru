export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-6 text-center text-sm text-subtle">
        © {new Date().getFullYear()} GroceryGuru · Prices shown are estimates based on mock data.
      </div>
    </footer>
  );
}
