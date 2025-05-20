import { NextResponse } from 'next/server';

export async function GET() {
    console.log('Admin API called');
    return NextResponse.json({ message: 'Hello from Admin API' });
}
