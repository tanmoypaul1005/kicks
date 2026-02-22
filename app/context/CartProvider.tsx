"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

export interface CartItem {
  id: number;
  title: string;
  price: number;
  qty: number;
  size?: string | number | null;
  image?: string | null;
}

interface CartContextValue {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
  updateQty: (id: number, qty: number) => void;
  clear: () => void;
  count: number;
}

const COOKIE_NAME = "kicks_cart";

function readCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const v = document.cookie.match("(^|;)\\s*" + name + "\\s*=\\s*([^;]+)");
  return v ? decodeURIComponent(v.pop() as string) : null;
}

function writeCookie(name: string, value: string, days = 7) {
  if (typeof document === "undefined") return;
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${d.toUTCString()};path=/`;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const raw = readCookie(COOKIE_NAME);
    if (raw) {
      try {
        const parsed = JSON.parse(raw) as CartItem[];
        setItems(parsed);
      } catch (e) {
        setItems([]);
      }
    }
  }, []);

  useEffect(() => {
    writeCookie(COOKIE_NAME, JSON.stringify(items));
  }, [items]);

  const addItem = (item: CartItem) => {
    setItems((prev) => {
      const found = prev.find((p) => p.id === item.id && String(p.size) === String(item.size));
      if (found) {
        return prev.map((p) => (p.id === found.id && String(p.size) === String(item.size) ? { ...p, qty: p.qty + item.qty } : p));
      }
      return [...prev, item];
    });
  };

  const removeItem = (id: number) => setItems((p) => p.filter((i) => i.id !== id));
  const updateQty = (id: number, qty: number) => setItems((p) => p.map((i) => (i.id === id ? { ...i, qty } : i)));
  const clear = () => setItems([]);

  const value: CartContextValue = {
    items,
    addItem,
    removeItem,
    updateQty,
    clear,
    count: items.reduce((s, it) => s + it.qty, 0),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

export default CartProvider;
