import React from 'react';
import useFetch from './useFetch';

const PostsList = () => {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {data.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsList;
