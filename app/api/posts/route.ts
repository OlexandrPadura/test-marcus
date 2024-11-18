import { NextResponse } from 'next/server';

import posts from './posts.json';

import type { PostType } from 'src/types';

export function GET(_req: Request): NextResponse<PostType[]> {
  return NextResponse.json(posts);
}
