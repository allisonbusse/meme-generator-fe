import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CurrentMemeDisplay from './CurrentMemeDisplay';
import styles from './MemeForm.css'

const MemeForm = ({ handleSubmit }) => {

  const [top, setTop] = useState('');
  const [image, setImage] = useState('');
  const [bottom, setBottom] = useState('');

  return (
    <section className={styles.MemeForm}>
      <form onSubmit={event => handleSubmit(event, top, image, bottom)}>
        <p>Top Line: <input type='text' value={top} onChange={({ target }) => setTop(target.value)} /></p>
        <p>Bottom Line: <input type='text' value={bottom} onChange={({ target }) => setBottom(target.value)} /></p>
        <p>Image URL: <input type='text' value={image} onChange={({ target }) => setImage(target.value)} /></p>
        <button>Create Meme</button>
      </form>

      <CurrentMemeDisplay top={top} image={image} bottom={bottom} />
    </section>
  );
};

MemeForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default MemeForm;
