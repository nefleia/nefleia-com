'use client';
import useSWRInfinite from 'swr/infinite';

import { fetcher } from '@/libs/fetcher';
import { Blogs } from '@/types/micro-cms';

const PAGE_LIMIT = 5;

export const useBlogs = () => {
  const getKey = (pageIndex: number, previousPageData: Blogs | null) => {
    if (previousPageData && !previousPageData.contents.length) return null;
    return `/api/blogs?limit=${PAGE_LIMIT}&offset=${pageIndex * PAGE_LIMIT}`;
  };

  const { data, error, size, setSize, isLoading } = useSWRInfinite<Blogs>(
    getKey,
    fetcher,
  );

  const blogs = data ? data.flatMap((page) => page.contents) : [];
  const isLoadingInitialData = !data && !error;
  const isReachingEnd =
    (data?.[data.length - 1]?.contents?.length ?? 0) < PAGE_LIMIT;

  return {
    blogs,
    isLoadingInitialData,
    isLoading,
    isReachingEnd,
    loadMore: () => setSize(size + 1),
    isError: error,
  };
};
