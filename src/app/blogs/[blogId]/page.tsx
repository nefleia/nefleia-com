import Link from 'next/link';
import React from 'react';

import { BlogContent } from '@/components/blogs/BlogContent';
import { client } from '@/libs/client';
import { Blog } from '@/types/micro-cms';

type Props = {
  params: {
    blogId: string;
  };
};

export default async function BlogDetail({ params }: Props) {
  const { blogId } = params;

  const data: Blog = await client
    .get({
      endpoint: 'blogs',
      contentId: blogId,
    })
    .then((res) => res);

  if (!data) {
    return <div>not found article</div>;
  }

  return (
    <div className='flex flex-col items-center justify-center'>
      <BlogContent blog={data} />
      <Link
        href='/blogs'
        className='radius-2 mt-20 rounded-md border-1 px-2 py-1 hover:bg-gray-200'
      >
        <button type='button'>cd ..</button>
      </Link>
    </div>
  );
}
