import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
// to make dynamic
// 1. use dynamic mode segment option like above
// 2. use headers or cookies function
// 3. use any http method other than get

export async function GET(request: Request) {
  return NextResponse.json({ time: new Date().toLocaleTimeString() });
}
