import React from 'react';
import { Link } from 'react-router-dom';
import classes from './word.module.css';

const names = ['Manuel', 'Maximilian'];

export function Word({ id, author, body }) {
  return (
    <li className={classes.post}>
      <Link to={id}>
        <p className={classes.author}>{author}</p>
        <p className={classes.text}>{body}</p>
      </Link>
    </li>
  );
}