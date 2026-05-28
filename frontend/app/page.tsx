import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, BookmarkPlus, TrendingDown } from "lucide-react";
import { HeroPreview } from "@/components/home/HeroPreview";

/* ─── Landing page ──────────────────────────────────────────────────────── */
export default function LandingPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-hero">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: copy */}
          <div className="flex flex-col gap-6">
            {/* Store pill labels */}
            <div className="flex items-center gap-2 flex-wrap animate-fade-up animate-fade-up-1">
              {[
                { name: "Walmart", color: "#0071ce" },
                { name: "Kroger",  color: "#b71c1c" },
                { name: "H-E-B",   color: "#e31837" },
              ].map((s) => (
                <span
                  key={s.name}
                  className="rounded-full px-3 py-1 text-xs font-bold text-white"
                  style={{ background: s.color + "30", border: `1px solid ${s.color}50`, color: s.color }}
                >
                  {s.name}
                </span>
              ))}
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.1] tracking-[-0.02em] text-white animate-fade-up animate-fade-up-2">
              See which store saves you the most on your grocery list.
            </h1>

            <p className="text-lg leading-relaxed max-w-lg text-brand-300 animate-fade-up animate-fade-up-3">
              Type your items. GroceryGuru compares prices at Walmart, Kroger, and H-E-B
              and tells you exactly where to shop to spend less.
            </p>

            <div className="flex items-center gap-4 animate-fade-up animate-fade-up-4">
              <Link
                href="/compare"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-base font-bold text-white bg-brand-500 hover:bg-brand-600 transition-colors"
              >
                Get started
                <ArrowRight size={18} />
              </Link>
              <span className="text-sm text-hero-muted">
                No account needed
              </span>
            </div>
          </div>

          {/* Right: comparison preview */}
          <div className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
            <HeroPreview />
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section className="bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-ink mb-12">How it works</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10">
            {[
              {
                step: "1",
                title: "Add your items",
                body: "Type what you need: milk, eggs, bread, chicken. GroceryGuru recognizes common grocery items and matches them to store prices automatically.",
              },
              {
                step: "2",
                title: "Compare prices side by side",
                body: "See each item's price at Walmart, Kroger, and H-E-B in one view. The cheapest option at each store is highlighted so you can see tradeoffs at a glance.",
              },
              {
                step: "3",
                title: "Shop at the right store",
                body: "GroceryGuru totals your list at each store and recommends where to shop to spend the least. The savings add up over a full year of shopping.",
              },
            ].map((s) => (
              <div key={s.step} className="flex flex-col gap-3">
                <span className="text-6xl font-black leading-none text-brand-400">
                  {s.step}
                </span>
                <h3 className="text-lg font-bold text-ink">{s.title}</h3>
                <p className="text-sm leading-relaxed text-subtle">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STORES ───────────────────────────────────────────────────────── */}
      <section className="bg-muted py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-sm font-semibold text-subtle mb-6">
            Prices from the stores you already shop at
          </p>

          <div className="flex flex-wrap gap-4">
            {[
              { name: "Walmart",  bg: "#0071ce", detail: "Largest US retailer by volume" },
              { name: "Kroger",   bg: "#b71c1c", detail: "Nationwide grocery chain" },
              { name: "H-E-B",   bg: "#e31837", detail: "Texas favorite since 1905" },
            ].map((store) => (
              <div
                key={store.name}
                className="flex items-center gap-3 rounded-xl px-5 py-3.5"
                style={{ background: store.bg + "12", border: `1px solid ${store.bg}30` }}
              >
                <div
                  className="h-8 w-8 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: store.bg }}
                >
                  <span className="text-white text-xs font-black leading-none">
                    {store.name[0]}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-bold text-ink">{store.name}</p>
                  <p className="text-xs text-subtle">{store.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMING SOON ──────────────────────────────────────────────────── */}
      <section className="bg-surface py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-start gap-12 flex-col sm:flex-row">
            <div className="shrink-0">
              <p className="text-xs font-medium text-brand-500 mb-1.5">
                In development
              </p>
              <h2 className="text-2xl font-bold text-ink">What&apos;s coming next</h2>
            </div>

            <ul className="flex flex-col gap-4 sm:grid sm:grid-cols-2 sm:gap-x-12 sm:gap-y-5 flex-1">
              {[
                { icon: BookmarkPlus, text: "Save your grocery lists and reuse them each week" },
                { icon: Clock,        text: "Price history so you can spot trends over time" },
                { icon: TrendingDown, text: "Alerts when an item on your list drops in price" },
                { icon: CheckCircle2, text: "More stores added based on your region" },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <Icon size={16} className="text-brand-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-subtle">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-hero">
        <div className="mx-auto max-w-6xl px-4 text-center flex flex-col items-center gap-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-[-0.02em] text-white">
            Ready to find out where to shop?
          </h2>
          <p className="text-base max-w-sm text-brand-300">
            Takes less than a minute. Type your list and get a clear recommendation.
          </p>
          <Link
            href="/compare"
            className="inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-bold text-white bg-brand-500 hover:bg-brand-600 transition-colors"
          >
            Start comparing
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
