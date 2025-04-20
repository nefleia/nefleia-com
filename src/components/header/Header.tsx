'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathName = usePathname();

  return (
    <>
      <nav className="my-4 flex items-center justify-between">
        <Link href="./" className="font-bold text-3xl">
          nefleia
        </Link>
        <ul className="flex gap-4">
          <li>
            <Link
              href="/works"
              className={`font-bold text-lg underline-offset-8 hover:underline ${
                pathName === '/works' && 'underline'
              }`}
            >
              Works
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className={`font-bold text-lg underline-offset-8 hover:underline ${
                pathName === '/blog' && 'underline'
              }`}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/precious"
              className={`font-bold text-lg underline-offset-8 hover:underline ${
                pathName === '/precious' && 'underline'
              }`}
            >
              Precious
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
