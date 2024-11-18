import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server';

import posts from '../posts.json';

import type { PostType } from 'src/types';

export function GET(
  req: Request,
  { params }: { params: { slug: string } },
): NextResponse<PostType> {
  const slug = params.slug;

  const postsData = posts;

  const postBySlug = postsData.find((post) => post.slug === slug);

  if (!postBySlug) {
    redirect('/');
  }

  return NextResponse.json(postBySlug);
}
