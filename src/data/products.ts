export type Product = {
  name: string;
  image: string;
  description: string;
  links: {
    github?: string;
    web?: string;
  };
};

export const products: Product[] = [
  {
    name: 'a-cat-a-day',
    image: '/images/products/a_cat_a_day.gif',
    description: 'Google Chrome extension to be healed by cats',
    links: { github: 'https://github.com/nefleia/a-cat-a-day' },
  },
  {
    name: 'tetris',
    image: '/images/products/tetris.png',
    description: 'Tetris desktop app',
    links: {
      github: 'https://github.com/taco-tortilla/tetris-java',
    },
  },
  {
    name: 'recognize-text',
    image: '/images/products/recognize_text.png',
    description: 'OCR web app',
    links: {
      github: 'https://github.com/taco-tortilla/recognize-text',
      web: 'https://recognize-text.vercel.app/',
    },
  },
  {
    name: 'notion-blog',
    image: '/images/products/blog.png',
    description: 'Blogs using notion as a headless CMS',
    links: {
      github: 'https://github.com/taco-tortilla/notion-blog',
      web: 'https://tortilla-blog.vercel.app/',
    },
  },
  {
    name: 'tortilla-page',
    image: '/images/products/portfolio.png',
    description: 'This portfolio site',
    links: {
      github: 'Old portfolio site.',
      web: 'https://tortilla.page',
    },
  },
];
