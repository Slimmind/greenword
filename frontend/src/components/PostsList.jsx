import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Word from './word';
import classes from './PostsList.module.css';

function PostsList() {
  const posts = useLoaderData();

  return (
    <>
      {posts?.length > 0 && (
        <ul className={classes.posts}>
          {posts.map(post => <Word id={post.id} author={post.author} body={post.body} key={post.id} />)}
        </ul>
      )}
      {posts?.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}

export default PostsList;