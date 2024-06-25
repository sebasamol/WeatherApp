'use server'

import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '../../lib/connectDB';
import { Users } from '@/app/models/loginschema';

export async function POST(request: NextRequest, response: NextResponse) {

  const data = await request.formData();
  // var login = data.get('login')
  // var password = data.get('password')

  connectDB();
  

  const dbfetch = await Users.exists({ login: data.get('login'), pwd: data.get('password') })

  if (dbfetch) {
    console.log('Succes login')
    return NextResponse.json({
      message: "Success login "
    }, {
      status: 200,
    })
  } else {
    return NextResponse.json({
      message: "Login failed"
    }, {
      status: 400,
    })
    
  }


}
