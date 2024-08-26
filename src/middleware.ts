import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const themePreference = request.cookies.get("theme-preference");
  if (themePreference) {
    return response.cookies.set("theme-preference", "dark");
  }

  if (request.nextUrl.pathname === "/hehe") {
    return NextResponse.redirect(new URL("/with-parallel-route", request.url));
  }

  if (request.nextUrl.pathname === "/hoho") {
    return NextResponse.redirect(new URL("/with-parallel-route", request.url));
  }
}

export const config = {
  matcher: ["/hehe", "/hoho"],
};
