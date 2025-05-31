import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  url: string;
};
export function LinkIcon({ children, url }: Props) {
  return (
    <a href={url} target='_blank' rel='noopener noreferrer'>
      {children}
    </a>
  );
}
