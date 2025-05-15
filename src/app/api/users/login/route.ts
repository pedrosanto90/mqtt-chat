import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  const user = await request.json();
  const username = user.username;
  const login = await prisma.user.findUnique({
    where: { username },
  });
  if (!login) {
    return new Response(JSON.stringify({ status: "User not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  const checkPw = await bcrypt.compare(user.password, login.password);
  if (!checkPw) {
    return new Response(JSON.stringify({ status: "Invalid Credentials" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }
  return new Response(JSON.stringify({ status: "success" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
