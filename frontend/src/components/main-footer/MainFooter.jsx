import React from 'react';
import { Link } from 'react-router-dom';
import { MdPostAdd, MdMessage } from 'react-icons/md';
import classes from './main-footer.module.css';

function MainFooter() {
  return (
    <footer className={classes.header}>
      <Link to="/create-post" className={classes.button}>
        <MdPostAdd size={18} />
        New Word
      </Link>
    </footer>
  );
}

export default MainHeader;