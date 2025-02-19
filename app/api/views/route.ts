import { Redis } from '@upstash/redis'
import { NextResponse, NextRequest } from 'next/server';

//set up connection
const redis = new Redis({
  url:process.env.REDIS_URL,
  token:process.env.REDIS_TOKEN,
})

export const GET= async(
  req: NextRequest,
  res: NextResponse
) =>{
  try {
    //get view count
    const views=await redis.get("views");

    //update view count
    await redis.set("views",views?views as number+1:1);

    return NextResponse.json({views:views})
  } catch (error:any) {
    console.error('Error:', error);
    return NextResponse.json({msg:"Server Error"},{status:500})
  }
}