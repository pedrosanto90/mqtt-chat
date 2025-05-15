import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const authCookie = request.cookies.get("auth");

  if (!authCookie && request.nextUrl.pathname.startsWith("/chat")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

// Ativa o middleware apenas na rota /chat
export const config = {
  matcher: ["/chat"],
};
