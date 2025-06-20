import parse from 'html-react-parser';
import DOMPurify from 'isomorphic-dompurify';
import Image from 'next/image';

import { Blog } from '@/types/micro-cms';
import { formatJstDateFromUtc } from '@/utils/date';

type Props = {
  blog: Blog;
};

export function BlogContent({ blog }: Props) {
  const {
    title,
    description,
    content: htmlString,
    publishedAt: publishedAtUtc,
    eyecatch,
  } = blog;

  const cleanHtml = DOMPurify.sanitize(htmlString);
  const publishedAt = formatJstDateFromUtc(publishedAtUtc);

  return (
    <div>
      <div className='pb-20'>
        <div className='w-full rounded-lg bg-neutral-200'>
          <Image
            src={eyecatch.url}
            alt={title}
            width={1920}
            height={1080}
            className='aspect-video rounded-lg object-cover'
          />
        </div>
        <div className='pt-4 text-center'>
          <p className='py-2 text-xl font-bold'>{title}</p>
          <p className='py-2'>{description}</p>
          <p className='text-sm font-bold text-gray-400'>{publishedAt}</p>
        </div>
      </div>
      <div className='prose'>{parse(cleanHtml)}</div>
    </div>
  );
}
