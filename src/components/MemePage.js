import React from 'react';
import DisplayMeme from '../containers/memes/DisplayMeme';
import CommentsByMemeId from '../containers/comments/CommentsByMemeId';
import CreateComment from '../containers/comments/CreateComment';

export default function MemePage() {
  return (
    <>
      <DisplayMeme />
      <CreateComment />
      <CommentsByMemeId />
    </>
  );
}
