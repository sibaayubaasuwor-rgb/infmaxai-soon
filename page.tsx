"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Zap, Brain, Globe, Shield, ChevronRight } from "lucide-react";

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [msg, setMsg] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setMsg("You're on the list! We'll notify you at launch.");
        setEmail("");
      } else {
        setStatus("error");
        setMsg(data.error || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setMsg("Network error. Please try again.");
    }
  };

  const features = [
    { icon: Brain, title: "Infinite Context", desc: "Process entire codebases, documents, and datasets in a single prompt with our extended context architecture." },
    { icon: Zap, title: "Instant Inference", desc: "Sub-100ms response times at any scale. Engineered for real-time applications and production workloads." },
    { icon: Globe, title: "Global Intelligence", desc: "Multi-language, multi-modal AI that understands the nuances of human communication across 80+ languages." },
    { icon: Shield, title: "Enterprise Security", desc: "SOC2 Type II, GDPR compliant. Your data is yours — never used for training. On-premise options available." },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden pt-16">
      {/* Background orbs */}
      <div className="glow-orb w-96 h-96 top-20 left-1/4 opacity-20" style={{ background: "radial-gradient(circle, #2176d2, transparent)" }} />
      <div className="glow-orb w-80 h-80 top-40 right-1/4 opacity-15" style={{ background: "radial-gradient(circle, #63b3f7, transparent)" }} />
      <div className="glow-orb w-64 h-64 bottom-40 left-1/3 opacity-10" style={{ background: "radial-gradient(circle, #3a94e8, transparent)" }} />

      {/* Hero */}
      <section className="relative z-10 max-w-5xl mx-auto px-5 pt-20 pb-24 text-center">
        {/* Badge */}
        <div className="animate-fade-up stagger-1 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8" style={{ background: "rgba(33,118,210,0.12)", border: "1px solid rgba(33,118,210,0.3)", color: "#63b3f7" }}>
          <Sparkles size={14} />
          <span>Launching Q1 2025 — Join the Waitlist</span>
        </div>

        <h1 className="animate-fade-up stagger-2 font-display text-5xl md:text-7xl font-bold mb-6 leading-tight" style={{ color: "var(--fg)" }}>
          Intelligence Without{" "}
          <span className="gradient-text">Limits</span>
        </h1>

        <p className="animate-fade-up stagger-3 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: "var(--fg-muted)" }}>
          InfmaxAI is the next-generation AI platform engineered for infinite scale. From real-time inference to autonomous workflows — the future starts here.
        </p>

        {/* Email capture */}
        <form onSubmit={handleSubscribe} className="animate-fade-up stagger-4 flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="inp flex-1"
            disabled={status === "loading" || status === "success"}
          />
          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="btn-shimmer px-6 py-3 rounded-xl font-semibold text-white transition-all hover:opacity-90 active:scale-95 disabled:opacity-60 whitespace-nowrap flex items-center gap-2 justify-center"
            style={{ background: "linear-gradient(135deg, #2176d2, #3a94e8)" }}
          >
            {status === "loading" ? "Joining..." : status === "success" ? "✓ Joined!" : <>Join Waitlist <ArrowRight size={15} /></>}
          </button>
        </form>

        {msg && (
          <p className={`text-sm mb-4 ${status === "success" ? "text-green-400" : "text-red-400"}`}>{msg}</p>
        )}

        <p className="animate-fade-up stagger-5 text-xs" style={{ color: "var(--fg-muted)" }}>
          No spam. Unsubscribe anytime. Join 2,400+ early adopters.
        </p>

        {/* CTA buttons */}
        <div className="animate-fade-up stagger-5 flex flex-wrap gap-3 justify-center mt-8">
          <Link href="/launch-soon" className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all hover:opacity-80" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)", color: "var(--fg)" }}>
            See Launch Details <ChevronRight size={15} />
          </Link>
          <Link href="/book-now" className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all hover:opacity-80" style={{ border: "1px solid rgba(33,118,210,0.4)", color: "#63b3f7", background: "rgba(33,118,210,0.08)" }}>
            Book Early Access <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* Floating mockup */}
      <section className="relative z-10 max-w-4xl mx-auto px-5 mb-24">
        <div className="animate-float rounded-2xl overflow-hidden" style={{ border: "1px solid var(--border)", background: "var(--card-bg)", boxShadow: "0 32px 80px rgba(0,0,0,0.3)" }}>
          <div className="flex items-center gap-2 px-5 py-3" style={{ borderBottom: "1px solid var(--border)" }}>
            <div className="w-3 h-3 rounded-full bg-red-500 opacity-80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-80" />
            <div className="w-3 h-3 rounded-full bg-green-500 opacity-80" />
            <div className="flex-1 mx-4 py-1 px-3 rounded text-xs" style={{ background: "var(--bg-secondary)", color: "var(--fg-muted)" }}>app.infmaxai.com/console</div>
          </div>
          <div className="p-6 md:p-8" style={{ background: "var(--bg-secondary)" }}>
            <div className="flex gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center" style={{ background: "linear-gradient(135deg, #2176d2, #63b3f7)" }}>
                <Zap size={14} className="text-white" />
              </div>
              <div className="flex-1 space-y-2">
                <div className="h-3 rounded-full" style={{ background: "linear-gradient(90deg, var(--border), transparent)", width: "70%" }} />
                <div className="h-3 rounded-full" style={{ background: "linear-gradient(90deg, var(--border), transparent)", width: "50%" }} />
              </div>
            </div>
            <div className="space-y-2 mb-6">
              {[90, 75, 60, 45].map((w, i) => (
                <div key={i} className="h-3 rounded-full" style={{ background: "var(--border)", width: `${w}%` }} />
              ))}
            </div>
            <div className="flex gap-2">
              <div className="h-8 rounded-lg flex-1" style={{ background: "linear-gradient(90deg, rgba(33,118,210,0.3), rgba(58,148,232,0.3))", border: "1px solid rgba(33,118,210,0.3)" }} />
              <div className="h-8 rounded-lg w-24" style={{ background: "var(--border)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 max-w-6xl mx-auto px-5 mb-24">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--fg)" }}>
            Built for the Next Era
          </h2>
          <p className="max-w-xl mx-auto" style={{ color: "var(--fg-muted)" }}>
            Every layer of InfmaxAI is designed with production-grade performance, security, and flexibility in mind.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="glass rounded-2xl p-6 transition-all hover:-translate-y-1" style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(33,118,210,0.15)", color: "#63b3f7" }}>
                <Icon size={20} />
              </div>
              <h3 className="font-display font-semibold mb-2" style={{ color: "var(--fg)" }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 max-w-4xl mx-auto px-5 mb-24">
        <div className="glass rounded-3xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, rgba(33,118,210,0.08), rgba(99,179,247,0.05))", border: "1px solid rgba(33,118,210,0.2)" }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[["2,400+", "Waitlist"], ["<100ms", "Latency"], ["99.9%", "Uptime SLA"], ["80+", "Languages"]].map(([val, label]) => (
              <div key={label}>
                <div className="font-display text-3xl font-bold gradient-text mb-1">{val}</div>
                <div className="text-sm" style={{ color: "var(--fg-muted)" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="relative z-10 max-w-3xl mx-auto px-5 mb-24 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--fg)" }}>
          Ready to be first?
        </h2>
        <p className="mb-8" style={{ color: "var(--fg-muted)" }}>
          Secure your early access before we open to the public.
        </p>
        <Link href="/book-now" className="btn-shimmer inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-lg transition-all hover:opacity-90 active:scale-95" style={{ background: "linear-gradient(135deg, #2176d2, #3a94e8)" }}>
          Book Early Access <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
