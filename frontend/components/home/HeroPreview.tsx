import { CheckCircle2 } from "lucide-react";

const items = [
  { name: "Milk (1 gal)",    walmart: 3.49, kroger: 3.79, heb: 3.29 },
  { name: "Eggs (12 ct)",    walmart: 4.29, kroger: 4.49, heb: 3.99 },
  { name: "Bread (loaf)",    walmart: 2.99, kroger: 3.29, heb: 2.79 },
  { name: "Chicken (lb)",    walmart: 3.99, kroger: 4.29, heb: 3.79 },
  { name: "Bananas (bunch)", walmart: 1.49, kroger: 1.59, heb: 1.29 },
];

const totals = { walmart: 16.25, kroger: 17.45, heb: 15.15 };

const stores = [
  { id: "walmart", label: "Walmart", color: "#0071ce" },
  { id: "kroger",  label: "Kroger",  color: "#b71c1c" },
  { id: "heb",     label: "H-E-B",   color: "#e31837" },
] as const;

function cheapest(w: number, k: number, h: number) {
  return Math.min(w, k, h);
}

export function HeroPreview() {
  return (
    <div
      className="w-full rounded-2xl overflow-hidden text-xs select-none animate-fade-up animate-fade-up-5"
      style={{
        background: "oklch(0.15 0.05 145)",
        border: "1px solid oklch(0.30 0.08 145)",
        boxShadow: "0 24px 64px oklch(0.10 0.05 145 / 0.6)",
      }}
    >
      {/* Column headers */}
      <div
        className="grid gap-0 px-4 py-3"
        style={{ gridTemplateColumns: "1fr 72px 72px 72px", background: "oklch(0.12 0.04 145)" }}
      >
        <span style={{ color: "oklch(0.50 0.04 145)" }} className="font-medium">Item</span>
        {stores.map((s) => (
          <span key={s.id} className="text-center font-bold" style={{ color: s.color }}>
            {s.label}
          </span>
        ))}
      </div>

      {/* Item rows */}
      {items.map((item) => {
        const min = cheapest(item.walmart, item.kroger, item.heb);
        const prices = [item.walmart, item.kroger, item.heb];
        return (
          <div
            key={item.name}
            className="grid gap-0 px-4 py-2.5"
            style={{
              gridTemplateColumns: "1fr 72px 72px 72px",
              borderTop: "1px solid oklch(0.22 0.06 145)",
            }}
          >
            <span style={{ color: "oklch(0.72 0.05 145)" }}>{item.name}</span>
            {prices.map((price, i) => (
              <span
                key={i}
                className="text-center font-semibold"
                style={{
                  color: price === min
                    ? "oklch(0.72 0.18 145)"
                    : "oklch(0.46 0.04 145)",
                }}
              >
                ${price.toFixed(2)}
                {price === min && " ✓"}
              </span>
            ))}
          </div>
        );
      })}

      {/* Totals row */}
      <div
        className="grid gap-0 px-4 py-3"
        style={{
          gridTemplateColumns: "1fr 72px 72px 72px",
          borderTop: "1px solid oklch(0.30 0.08 145)",
          background: "oklch(0.12 0.04 145)",
        }}
      >
        <span style={{ color: "oklch(0.50 0.04 145)" }} className="font-semibold">Total</span>
        {[totals.walmart, totals.kroger, totals.heb].map((total, i) => {
          const isWinner = i === 2;
          return (
            <span
              key={i}
              className="text-center font-bold"
              style={{ color: isWinner ? "oklch(0.72 0.18 145)" : "oklch(0.46 0.04 145)" }}
            >
              ${total.toFixed(2)}
            </span>
          );
        })}
      </div>

      {/* Recommendation strip */}
      <div
        className="px-4 py-3 flex items-center gap-2 text-xs font-semibold"
        style={{
          background: "oklch(0.32 0.12 145)",
          color: "oklch(0.90 0.08 145)",
        }}
      >
        <CheckCircle2 size={14} />
        H-E-B saves you $2.30 on this list
      </div>
    </div>
  );
}
