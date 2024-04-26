import { NextRequest, NextResponse } from 'next/server'
 
export async function POST(request: NextRequest, response: NextResponse) {
    console.log(await request.formData())
    return new NextResponse("Thank you")
  }