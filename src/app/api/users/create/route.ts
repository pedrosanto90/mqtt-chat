import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  const user = await request.json();
  user.password = await bcrypt.hash(user.password, 10);
  const newUser = await prisma.user.create({
    data: {
      username: user.username,
      password: user.password,
    },
  });
  return new Response(JSON.stringify({ newUser }), {
    status: 201,
    headers: { "Content-type": "application/json" },
  });
}
