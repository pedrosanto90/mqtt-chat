import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
import { serialize } from "cookie";

export async function POST(request: Request) {
  const user = await request.json();
  const username = user.username;
  const login = await prisma.user.findUnique({
    where: { username },
  });
  if (!login) {
    return new Response(JSON.stringify({ "not ok": "User not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  const checkPw = await bcrypt.compare(user.password, login.password);
  if (!checkPw) {
    return new Response(JSON.stringify({ "not ok": "Invalid Credentials" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  const clientCookie = serialize("username", username, {
    httpOnly: false,
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 dias
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  });
  const httpCookie = serialize("auth", username, {
    httpOnly: true, // Lido pelo middleware
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });

  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Set-Cookie", httpCookie);
  headers.append("Set-Cookie", clientCookie);

  return new Response(JSON.stringify({ ok: "success" }), {
    status: 200,
    headers,
  });
}
