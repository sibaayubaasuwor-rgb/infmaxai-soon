# InfmaxAI — Launching Soon

A full-stack "Launching Soon" SaaS site built with Next.js 14, TypeScript, TailwindCSS, and Supabase.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Environment Variables
Your `.env.local` is already pre-configured:
```env
NEXT_PUBLIC_SUPABASE_URL=https://bisbvclvmfutcobjtyae.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_f-JIGcUZtvbND6g6WlvWhg_3_d093K2
```

### 3. Set Up Supabase Database
1. Go to your [Supabase Dashboard](https://supabase.com/dashboard)
2. Open the **SQL Editor**
3. Paste and run the contents of `supabase/schema.sql`

This creates:
- `waitlist` — email capture from landing + launch-soon page
- `messages` — contact form submissions
- `bookings` — early access booking requests

### 4. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
infmaxai/
├── app/
│   ├── page.tsx                    # Landing page (hero + email capture + features)
│   ├── about/page.tsx              # Mission, vision, timeline
│   ├── pricing/page.tsx            # 3-tier pricing (Free, Pro, Enterprise)
│   ├── launch-soon/page.tsx        # Countdown timer + waitlist form
│   ├── book-now/page.tsx           # Early access booking form
│   ├── (auth)/
│   │   ├── login/page.tsx          # Supabase Auth login
│   │   ├── register/page.tsx       # Supabase Auth register
│   │   └── reset-password/page.tsx # Password reset
│   └── api/
│       ├── subscribe/route.ts      # POST /api/subscribe → waitlist table
│       ├── contact/route.ts        # POST /api/contact  → messages table
│       └── book/route.ts           # POST /api/book     → bookings table
├── components/
│   ├── Navbar.tsx                  # Responsive nav with theme toggle
│   ├── Footer.tsx                  # Footer with links
│   └── ThemeProvider.tsx           # Dark/light mode context
├── lib/
│   ├── supabase.ts                 # Client-side Supabase client
│   └── supabase-server.ts          # Server-side Supabase client
├── styles/
│   └── globals.css                 # Global styles + CSS variables
├── supabase/
│   └── schema.sql                  # Database schema
└── .env.local                      # Environment variables
```

---

## 🎨 Features

- ✅ **Dark/Light mode** — persisted in localStorage
- ✅ **Fully responsive** — mobile-first design
- ✅ **Live countdown timer** — on launch-soon page
- ✅ **Supabase Auth** — login, register, reset password
- ✅ **API routes with validation** — subscribe, contact, book
- ✅ **Row Level Security** — Supabase RLS policies
- ✅ **Custom fonts** — Syne (display) + DM Sans (body)
- ✅ **Animated UI** — fade-up, float, shimmer effects
- ✅ **Glass morphism cards** — consistent design system

---

## 🚢 Deploy to Vercel

```bash
npm install -g vercel
vercel --prod
```

Add your env vars in Vercel dashboard under Project Settings → Environment Variables.

---

## 🔧 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | TailwindCSS |
| Database | Supabase (PostgreSQL) |
| Auth | Supabase Auth |
| Icons | Lucide React |
| Fonts | Google Fonts (Syne + DM Sans) |
| Deploy | Vercel |
