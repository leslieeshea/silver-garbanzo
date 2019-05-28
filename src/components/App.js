import React from 'react';
import Memes from './memes/Memes';
import MemeForm from './memes/MemeForm';

export default function App() {
  const memeArray = [
    { url: 'https://i.imgur.com/fQnYAw8.png' },
    { url: 'https://pics.me.me/visits-chernobyl-me-laughoutloud-club-another-generic-surprised-pikachu-meme-39287918.png' },
    { url: 'https://i.imgur.com/fQnYAw8.png' }
  ];

  return (
    <> 
      <MemeForm onSubmit={() => {}} />
      <Memes memes={memeArray} />
    </>
  );
}
