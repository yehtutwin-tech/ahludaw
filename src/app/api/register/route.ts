import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";

export async function POST(request: Request) {
  const { name, email, password } = await request.json();

  if (!name || !email || !password) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const db = await getDb();
  const collection = db.collection('users');

  const existingUser = await collection.findOne({ email });

  if (existingUser) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await collection.insertOne({
    name,
    email,
    password: hashedPassword,
    createdAt: new Date(),
  });

  return NextResponse.json({ message: "User created", user });
}
