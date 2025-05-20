import { NextResponse } from 'next/server';

export async function GET() {
    console.log('Admin Cash-in API called');
    return NextResponse.json({ message: 'Hello from Admin Cash-in API' });
}
