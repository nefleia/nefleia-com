import { Icon } from '@iconify/react';
import Link from 'next/link';

import { LinkIcon } from './LinkIcon';
import links from '../data/links.json';

export function Header() {
  return (
    <header className='mx-12 my-5 flex justify-between'>
      <Link href='./' className='pointer hover:animate-pulse'>
        <h1 className='text-xl font-bold'>nefleia</h1>
      </Link>
      <ul className='flex gap-6'>
        <li>
          <LinkIcon url={links.github}>
            <Icon
              icon='ri:github-fill'
              className='hover:animate-wiggle-x text-2xl'
            />
          </LinkIcon>
        </li>
        <li>
          <LinkIcon url={links.twitter}>
            <Icon
              icon='ri:twitter-x-fill'
              className='hover:animate-wiggle-x text-2xl'
            />
          </LinkIcon>
        </li>
      </ul>
    </header>
  );
}
