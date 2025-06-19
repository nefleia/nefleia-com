'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className='animate-fade-in flex h-full flex-col items-center justify-center'>
      <h1>
        <span className='mr-2 inline-flex'>🧟‍♂️</span>oops, something went wrong
        <span className='ml-2 inline-flex'>🧟‍♂️</span>
      </h1>
      <button
        type='button'
        onClick={() => reset()}
        className='radius-2 mt-20 rounded-md border-1 px-2 py-1 hover:bg-gray-200'
      >
        try again
      </button>
    </div>
  );
}
