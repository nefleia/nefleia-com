import Link from 'next/link';
import React from 'react';

export default function NotFound() {
  return (
    <div className='animate-fade-in flex h-full flex-col items-center justify-center'>
      <h1>
        <span className='animate-spin-slow mr-2 inline-flex'>🦠</span>page not
        found
        <span className='animate-spin-slow ml-2 inline-flex'>🦠</span>
      </h1>
      <Link
        href='/'
        className='radius-2 mt-20 rounded-md border-1 px-2 py-1 hover:bg-gray-200'
      >
        cd ~
      </Link>
    </div>
  );
}
