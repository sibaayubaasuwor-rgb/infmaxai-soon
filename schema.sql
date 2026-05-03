-- InfmaxAI Database Schema
-- Run this in your Supabase SQL Editor

-- Waitlist table
CREATE TABLE IF NOT EXISTS waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  source TEXT DEFAULT 'landing'
);

-- Messages table (contact form)
CREATE TABLE IF NOT EXISTS messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  read BOOLEAN DEFAULT FALSE
);

-- Bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Row Level Security
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Public insert policies (anyone can submit)
CREATE POLICY "Anyone can join waitlist" ON waitlist FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can send message" ON messages FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can book" ON bookings FOR INSERT WITH CHECK (true);

-- Select policies (only authenticated users / service role)
CREATE POLICY "Auth users can read waitlist" ON waitlist FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "Auth users can read messages" ON messages FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "Auth users can read bookings" ON bookings FOR SELECT USING (auth.role() = 'authenticated');
