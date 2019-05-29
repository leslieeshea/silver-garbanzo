import React from 'react';
import DisplayMeme from '../containers/memes/DisplayMeme';
import CommentsByMemeId from '../containers/comments/CommentsByMemeId';
import CreateComment from '../containers/comments/CreateComment';
import { Link } from 'react-router-dom';
import styles from './styles.css';

export default function MemePage() {
  return (
    <section className={styles.MemePage}>
      <Link to="/"><p>Home</p></Link>
      <DisplayMeme />
      <CreateComment />
      <CommentsByMemeId />
    </section>
  );
}
