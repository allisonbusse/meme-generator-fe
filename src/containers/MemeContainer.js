import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MemeForm from '../components/meme/MemeForm';
import { createMeme, setMemes } from '../actions/memeActions';
import AllMemeDisplay from '../components/meme/AllMemeDisplay';
import { getMemes } from '../selectors/memeSelectors';

const MemeContainer = () => {
  const dispatch = useDispatch();
  const memes = useSelector(getMemes);

  useEffect(() => {
    dispatch(setMemes());
  }, []);
  
  const handleSubmit = (event, top, image, bottom) => {
    event.preventDefault();
    dispatch(createMeme(top, image, bottom));
  };

  return (
    <>
      <h1>Make Some Memes</h1>
      <MemeForm handleSubmit={handleSubmit} />
      <AllMemeDisplay memes={memes} />
    </>
  );
};

export default MemeContainer;
