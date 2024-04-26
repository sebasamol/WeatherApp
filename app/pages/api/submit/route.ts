import { NextRequest, NextResponse } from 'next/server'
 
export  async function POST(
    req: NextRequest,
    res: NextResponse
){
    const data= JSON.stringify(req.body)
    console.log(data)
    return NextResponse.json({ message: "Succes" });
    
}
 

 
