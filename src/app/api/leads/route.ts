import { NextRequest, NextResponse } from 'next/server'

export async function GET(_request: NextRequest) {
  // Placeholder — will query Supabase for leads
  return NextResponse.json({ leads: [], total: 0 })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    if (!body.email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    // Placeholder — will insert into Supabase
    return NextResponse.json({ success: true, lead: body }, { status: 201 })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
