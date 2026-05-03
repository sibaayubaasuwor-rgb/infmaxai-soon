import Link from "next/link";
import { Zap, Twitter, Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto px-5 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #2176d2, #63b3f7)" }}>
                <Zap size={16} className="text-white" />
              </div>
              <span className="font-display font-bold text-lg" style={{ color: "var(--fg)" }}>InfmaxAI</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "var(--fg-muted)" }}>
              Infinite intelligence, built for scale. The future of AI is launching soon — don&apos;t miss your early access.
            </p>
            <div className="flex gap-3 mt-4">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:bg-blue-500/10" style={{ border: "1px solid var(--border)", color: "var(--fg-muted)" }}>
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-sm mb-3" style={{ color: "var(--fg)" }}>Product</h4>
            <ul className="space-y-2">
              {[["About", "/about"], ["Pricing", "/pricing"], ["Launch Soon", "/launch-soon"], ["Book Now", "/book-now"]].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm hover:text-blue-400 transition-colors" style={{ color: "var(--fg-muted)" }}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-3" style={{ color: "var(--fg)" }}>Account</h4>
            <ul className="space-y-2">
              {[["Login", "/(auth)/login"], ["Register", "/(auth)/register"], ["Reset Password", "/(auth)/reset-password"]].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm hover:text-blue-400 transition-colors" style={{ color: "var(--fg-muted)" }}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3" style={{ borderTop: "1px solid var(--border)" }}>
          <p className="text-xs" style={{ color: "var(--fg-muted)" }}>© {new Date().getFullYear()} InfmaxAI. All rights reserved.</p>
          <p className="text-xs" style={{ color: "var(--fg-muted)" }}>Built with Next.js + Supabase</p>
        </div>
      </div>
    </footer>
  );
}
