import React from 'react';
import CreateMeme from '../containers/CreateMeme';
import AllMemes from '../containers/AllMemes';

export default function Home() {
  return (
    <>
      <CreateMeme />
      <AllMemes />
    </>
  );
}
