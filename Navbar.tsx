"use client";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon, Menu, X, Zap } from "lucide-react";
import { useState, useEffect } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/launch-soon", label: "Launch" },
  { href: "/book-now", label: "Book Now" },
];

export function Navbar() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
      style={{ background: "var(--nav-bg)", backdropFilter: "blur(16px)", borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent" }}
    >
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group" onClick={() => setOpen(false)}>
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #2176d2, #63b3f7)" }}>
            <Zap size={16} className="text-white" />
          </div>
          <span className="font-display font-bold text-lg tracking-tight" style={{ color: "var(--fg)" }}>
            InfmaxAI
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all hover:bg-blue-500/10"
              style={{ color: "var(--fg-muted)", fontFamily: "var(--font-body)" }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:bg-blue-500/10"
            style={{ color: "var(--fg-muted)" }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <div className="hidden md:flex items-center gap-2 ml-2">
            <Link
              href="/(auth)/login"
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all hover:bg-blue-500/10"
              style={{ color: "var(--fg-muted)" }}
            >
              Login
            </Link>
            <Link
              href="/(auth)/register"
              className="btn-shimmer px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-95"
              style={{ background: "linear-gradient(135deg, #2176d2, #3a94e8)" }}
            >
              Get Access
            </Link>
          </div>

          <button
            className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center"
            style={{ color: "var(--fg)" }}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-5 pb-5 pt-2 flex flex-col gap-1" style={{ background: "var(--nav-bg)", borderBottom: "1px solid var(--border)" }}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 rounded-lg text-sm font-medium"
              style={{ color: "var(--fg)" }}
            >
              {l.label}
            </Link>
          ))}
          <div className="flex gap-2 mt-2">
            <Link href="/(auth)/login" onClick={() => setOpen(false)} className="flex-1 text-center px-4 py-3 rounded-lg text-sm font-medium" style={{ color: "var(--fg)", border: "1px solid var(--border)" }}>Login</Link>
            <Link href="/(auth)/register" onClick={() => setOpen(false)} className="flex-1 text-center px-4 py-3 rounded-lg text-sm font-semibold text-white" style={{ background: "linear-gradient(135deg, #2176d2, #3a94e8)" }}>Register</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
