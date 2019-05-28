import React from 'react';
import Meme from './memes/Meme';
import Memes from './memes/Memes';

export default function App() {
  const memeArray = [
    { url: 'https://i.imgur.com/fQnYAw8.png' },
    { url: 'https://pics.me.me/visits-chernobyl-me-laughoutloud-club-another-generic-surprised-pikachu-meme-39287918.png' },
    { url: 'https://i.imgur.com/fQnYAw8.png' }
  ];
  
  return (
    <Memes memes={memeArray} />
  );
}
