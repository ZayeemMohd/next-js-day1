import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    { error: "Authentication required or token invalid" },
    { status: 401 },
  );
}

export async function POST() {
  return NextResponse.json(
    { error: "Authentication required or token invalid" },
    { status: 401 },
  );
}
