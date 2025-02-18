import { Redis } from '@upstash/redis'
import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  views: number;
};

type ErrorResponse = {
  error: string;
};

//set up connection
const redis = new Redis({
  url:process.env.REDIS_URL,
  token:process.env.REDIS_TOKEN,
})

export async function GET(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData | ErrorResponse>
) {
  try {
    //get view count
    const views=await redis.get("views");

    //update view count
    await redis.set("views",views?views as number+1:1);

    return new Response(JSON.stringify(views))
  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({msg:"Server Error"}),{status:500})
  }
}