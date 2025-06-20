export type Blogs = {
  contents: Blog[];
  totalCount: number;
  offset: number;
  limit: number;
};

export type Eyecatch = {
  url: string;
  height: number;
  width: number;
};

export type Category = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
};

export type Blog = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  description: string;
  content: string;
  eyecatch: Eyecatch;
  category: Category;
};
