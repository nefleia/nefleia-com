import { NextResponse } from 'next/server';

import { client } from '@/libs/client';
import { Blogs } from '@/types/micro-cms';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const limit = Number(searchParams.get('limit') ?? 10);
  const offset = Number(searchParams.get('offset') ?? 0);

  try {
    const data: Blogs = await client.get({
      endpoint: 'blogs',
      queries: { limit, offset },
    });
    return NextResponse.json(data);
  } catch (err) {
    console.error(err);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
