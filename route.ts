import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase-server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, source = "landing" } = body;

    // Validate
    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Valid email is required." }, { status: 400 });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format." }, { status: 400 });
    }

    const supabase = createServerClient();
    const { error } = await supabase
      .from("waitlist")
      .insert({ email: email.toLowerCase().trim(), source });

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json({ error: "You're already on the waitlist!" }, { status: 409 });
      }
      throw error;
    }

    return NextResponse.json({ message: "Successfully joined the waitlist!" }, { status: 201 });
  } catch (err) {
    console.error("Subscribe error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
