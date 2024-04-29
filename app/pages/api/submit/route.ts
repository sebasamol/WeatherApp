'use server'
import onSubmit from '@/app/utility/submit';
import { redirect, useRouter } from 'next/navigation'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest, response: NextResponse) {
  const data = await request.formData();
  console.log(data)
  //console.log(data)
  //redirect('/')
  return NextResponse.redirect('http://localhost:3000/pages/poznan')
}