import { useQuery } from 'react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
  const {
    data,
    error,
    isLoading,
    isError,
  } = useQuery('posts', fetchPosts, {
    cacheTime: 5 * 60 * 1000, // Cache data for 5 minutes
    staleTime: 60 * 1000, // Data stays fresh for 1 minute
    refetchOnWindowFocus: false, // Prevent refetching when window regains focus
    keepPreviousData: true, // Maintain previous data while fetching new data
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
