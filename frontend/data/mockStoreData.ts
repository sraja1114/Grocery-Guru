import type { GroceryItem, Store } from "@/types";

const STOCK_IMAGE =
  "https://images.unsplash.com/photo-1542838132-92c53300491e?w=200&h=200&fit=crop&auto=format";

export const GROCERY_ITEMS: GroceryItem[] = [
  { id: "milk",           name: "Milk (1 gal)",        image: STOCK_IMAGE, walmart: 3.49, kroger: 3.79, heb: 3.29 },
  { id: "eggs",           name: "Eggs (12 ct)",        image: STOCK_IMAGE, walmart: 4.29, kroger: 4.49, heb: 3.99 },
  { id: "bread",          name: "Bread (loaf)",        image: STOCK_IMAGE, walmart: 2.99, kroger: 3.29, heb: 2.79 },
  { id: "butter",         name: "Butter (1 lb)",       image: STOCK_IMAGE, walmart: 4.99, kroger: 5.49, heb: 4.79 },
  { id: "cheese",         name: "Cheddar Cheese",      image: STOCK_IMAGE, walmart: 5.49, kroger: 5.99, heb: 5.29 },
  { id: "chicken breast", name: "Chicken Breast (lb)", image: STOCK_IMAGE, walmart: 3.99, kroger: 4.29, heb: 3.79 },
  { id: "ground beef",    name: "Ground Beef (lb)",    image: STOCK_IMAGE, walmart: 5.99, kroger: 6.49, heb: 5.79 },
  { id: "apples",         name: "Apples (3 lb bag)",   image: STOCK_IMAGE, walmart: 4.49, kroger: 4.29, heb: 3.99 },
  { id: "bananas",        name: "Bananas (bunch)",     image: STOCK_IMAGE, walmart: 1.49, kroger: 1.59, heb: 1.29 },
  { id: "orange juice",   name: "Orange Juice (52oz)", image: STOCK_IMAGE, walmart: 4.79, kroger: 5.19, heb: 4.49 },
  { id: "pasta",          name: "Pasta (16oz)",        image: STOCK_IMAGE, walmart: 1.29, kroger: 1.49, heb: 1.39 },
  { id: "rice",           name: "Rice (5 lb bag)",     image: STOCK_IMAGE, walmart: 4.98, kroger: 5.49, heb: 4.79 },
  { id: "canned tomatoes",name: "Canned Tomatoes",     image: STOCK_IMAGE, walmart: 0.99, kroger: 1.19, heb: 0.89 },
  { id: "yogurt",         name: "Greek Yogurt",        image: STOCK_IMAGE, walmart: 5.49, kroger: 5.99, heb: 4.99 },
  { id: "coffee",         name: "Coffee (12oz)",       image: STOCK_IMAGE, walmart: 7.98, kroger: 8.49, heb: 7.49 },
  { id: "cereal",         name: "Cereal (18oz)",       image: STOCK_IMAGE, walmart: 3.99, kroger: 4.49, heb: 3.79 },
  { id: "potatoes",       name: "Potatoes (5 lb)",     image: STOCK_IMAGE, walmart: 4.29, kroger: 4.49, heb: 3.99 },
  { id: "onions",         name: "Onions (3 lb bag)",   image: STOCK_IMAGE, walmart: 2.99, kroger: 3.29, heb: 2.79 },
  { id: "lettuce",        name: "Romaine Lettuce",     image: STOCK_IMAGE, walmart: 2.49, kroger: 2.79, heb: 2.29 },
  { id: "olive oil",      name: "Olive Oil (16.9oz)",  image: STOCK_IMAGE, walmart: 7.98, kroger: 8.99, heb: 7.49 },
];

export const STORES: Store[] = [
  { id: "walmart", name: "Walmart",  color: "#0071ce", textColor: "#ffffff" },
  { id: "kroger",  name: "Kroger",   color: "#b71c1c", textColor: "#ffffff" },
  { id: "heb",     name: "H-E-B",    color: "#e31837", textColor: "#ffffff" },
];
