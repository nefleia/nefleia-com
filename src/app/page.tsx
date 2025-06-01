import Image from 'next/image';

import { plants } from '@/data/plants';

import profileImage from '../../public/images/profile.jpg';
import { SectionTitle } from '@/components/SectionTitle';

export default function Home() {
  return (
    <>
      <div className='flex flex-col items-center gap-4'>
        <div className='tablet:size-40 size-32 rounded-full bg-neutral-200'>
          <Image
            src={profileImage}
            width={1125}
            height={1125}
            alt='profile image'
            placeholder='blur'
            className='tablet:size-40 size-32 rounded-full'
          />
        </div>
        <h1 className='text-2xl font-bold'>nefleia</h1>
      </div>
      <div className='flex flex-col gap-5'>
        <section>
          <SectionTitle>work</SectionTitle>
          <p>
            Working full-time as a software enginner, I&apos;m involved in both
            frontend (TypeScript | React | Next.js) and backend (Java | Spring
            Boot | Python) dev.
          </p>
        </section>
        <section>
          <SectionTitle>roommate</SectionTitle>
          <div>
            {plants.map((plant, index) => {
              const searchUrl = `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(plant.name)}`;
              const isLast = index === plants.length - 1;
              return (
                <span key={plant.name}>
                  <a
                    href={searchUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='underline underline-offset-2 hover:animate-pulse'
                  >
                    {plant.name}
                  </a>
                  {!isLast && ' / '}
                </span>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}
