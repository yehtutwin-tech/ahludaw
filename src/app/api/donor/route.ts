import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  console.log("searchParams", searchParams);
  const search = searchParams.get("search");
  console.log("search", search);
  // Simulate a database search
  const donors = [
    { id: "1", name: "John Doe" },
    { id: "2", name: "Jane Smith" },
  ];
  return NextResponse.json(donors);
}
