// app/api/hello/route.ts

import { NextResponse } from 'next/server';

export async function GET() {
    console.log('Cash-in API called');
    return NextResponse.json({ message: 'Hello from Cash-in API' });
}
