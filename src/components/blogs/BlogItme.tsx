import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Blog } from '@/types/micro-cms';
import { formatJstDateFromUtc } from '@/utils/date';

type Props = {
  blog: Blog;
};

export function BlogItme({ blog }: Props) {
  const { title, description, publishedAt: publishedAtUtc, eyecatch } = blog;
  const publishedAt = formatJstDateFromUtc(publishedAtUtc);

  return (
    <Link href={`/blogs/${blog.id}`}>
      <div className='items-center rounded-lg p-5 text-center hover:bg-gray-100 sm:p-6'>
        <div className='w-full rounded-lg bg-neutral-200'>
          <Image
            src={eyecatch.url}
            alt={title}
            width={1920}
            height={1080}
            className='aspect-video rounded-lg object-cover'
          />
        </div>
        <div className='pt-4'>
          <p className='py-2 text-xl font-bold'>{title}</p>
          <p className='py-2'>{description}</p>
          <p className='text-sm font-bold text-gray-400'>{publishedAt}</p>
        </div>
      </div>
    </Link>
  );
}
