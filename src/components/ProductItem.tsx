'use client';

import { Icon } from '@iconify/react/dist/iconify.js';
import Image from 'next/image';

import { Product } from '@/data/products';

export function ProductItem({ productInfo }: { productInfo: Product }) {
  const { name, image, links, description } = productInfo;

  return (
    <div className='flex flex-col items-center rounded-lg bg-neutral-300 p-5 sm:p-4'>
      <div className='aspect-video w-full rounded-lg bg-neutral-200'>
        <Image
          src={image}
          width={1920}
          height={1080}
          alt={name}
          className='aspect-video w-full rounded-lg object-cover'
        />
      </div>
      <div className='pt-5'>
        <h1 className='text-xl font-bold'>{name}</h1>
      </div>
      <div className='pt-1'>
        <p className='text-sm text-neutral-600/80'>{description}</p>
      </div>
      {links !== undefined && (
        <div className='laptop:pt-5 flex flex-wrap items-center justify-center gap-5 pt-2'>
          {links?.github && (
            <a
              href={links.github}
              target='_blank'
              rel='noopener noreferrer'
              className='hover:cursor-pointer'
            >
              <Icon
                icon='ri:github-fill'
                className='tablet:text-4xl text-2xl transition-transform duration-100 hover:scale-110'
              />
            </a>
          )}
          {links?.web && (
            <a
              href={links.web}
              target='_blank'
              rel='noopener noreferrer'
              className='hover:cursor-pointer'
            >
              <Icon
                icon='ri:window-2-fill'
                className='tablet:text-4xl text-2xl transition-transform duration-100 hover:scale-110'
              />
            </a>
          )}
        </div>
      )}
    </div>
  );
}
