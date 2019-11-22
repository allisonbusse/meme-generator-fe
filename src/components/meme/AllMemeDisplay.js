import React from 'react';
import CurrentMemeDisplay from './CurrentMemeDisplay';
import styles from './AllMemeDisplay.css';

const AllMemeDisplay = ({ memes }) => {

  const allMemes = memes.map((meme, i) => {
    return <CurrentMemeDisplay key={meme.image} {...meme} />
  });

  return (
    <ul className={styles.AllMemeDisplay}>
      {allMemes}
    </ul>
  );
};



export default AllMemeDisplay;
