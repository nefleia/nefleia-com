'use client';
import { BlogItme } from '@/components/blogs/BlogItme';
import NoPost from '@/components/blogs/NoPost';
import Loading from '@/components/Loading';
import { useBlogs } from '@/hooks/useBlogs';

export default function Blog() {
  const {
    blogs,
    isLoadingInitialData,
    isLoading,
    isReachingEnd,
    loadMore,
    isError,
  } = useBlogs();

  if (isError) {
    return <div className='text-center'>Failed to load blogs</div>;
  }

  if (isLoadingInitialData) {
    return <Loading />;
  }

  if (blogs.length === 0) {
    return <NoPost />;
  }

  const [latestBlog, ...otherBlogs] = blogs;

  return (
    <div>
      <div className='pb-7'>
        <BlogItme blog={latestBlog} />
      </div>
      <div className='animate-fade-in grid grid-cols-1 gap-7 sm:grid-cols-2'>
        {otherBlogs.map((blog) => (
          <div key={blog.id}>
            <BlogItme blog={blog} key={blog.id} />
          </div>
        ))}
      </div>
      <div className='flex items-center justify-center'>
        {!isReachingEnd && (
          <button
            type='button'
            onClick={loadMore}
            disabled={isLoading}
            className='radius-2 mt-20 rounded-md border-1 px-2 py-1 hover:bg-gray-200'
          >
            more
          </button>
        )}
      </div>
    </div>
  );
}
