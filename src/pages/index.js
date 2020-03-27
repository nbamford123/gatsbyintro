import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import usePosts  from '../hooks/usePosts';
import PostPreview from '../components/postPreview';
import Hero from '../components/hero';

export default () => {
  const posts = usePosts();
  return (
    <>
      <Hero />
      <Layout>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </Layout>
    </>
  );
}
