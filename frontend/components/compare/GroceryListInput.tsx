"use client";

import { KeyboardEvent, useState } from "react";
import { Plus, X } from "lucide-react";
import { Button } from "@/components/shared/Button";
import { Input } from "@/components/shared/Input";

interface GroceryListInputProps {
  items: string[];
  onChange: (items: string[]) => void;
}

export function GroceryListInput({ items, onChange }: GroceryListInputProps) {
  const [value, setValue] = useState("");

  function addItem() {
    const trimmed = value.trim();
    if (!trimmed) return;
    if (items.map((i) => i.toLowerCase()).includes(trimmed.toLowerCase())) {
      setValue("");
      return;
    }
    onChange([...items, trimmed]);
    setValue("");
  }

  function removeItem(index: number) {
    onChange(items.filter((_, i) => i !== index));
  }

  function handleKey(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") addItem();
  }

  return (
    <div className="w-full space-y-4">
      <div className="flex gap-2">
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKey}
          placeholder="e.g. milk, eggs, bread..."
          className="flex-1"
          aria-label="Add grocery item"
        />
        <Button onClick={addItem} size="md" className="shrink-0">
          <Plus size={16} />
          Add
        </Button>
      </div>

      {items.length > 0 && (
        <div className="flex flex-wrap gap-2" role="list" aria-label="Grocery list items">
          {items.map((item, i) => (
            <span
              key={`${item}-${i}`}
              role="listitem"
              className="inline-flex items-center gap-1 rounded-full bg-brand-50 border border-brand-500/20 px-3 py-1 text-sm font-medium text-brand-700"
            >
              {item}
              <button
                onClick={() => removeItem(i)}
                className="flex items-center justify-center h-5 w-5 rounded-full hover:bg-brand-500/15 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                aria-label={`Remove ${item}`}
              >
                <X size={12} aria-hidden="true" />
              </button>
            </span>
          ))}
        </div>
      )}

      {items.length === 0 && (
        <p className="text-sm text-subtle italic">
          Start typing to add items to your list.
        </p>
      )}
    </div>
  );
}
