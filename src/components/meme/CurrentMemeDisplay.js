import React from 'react';
import PropTypes from 'prop-types';
import styles from './CurrentMemeDisplay.css';

const CurrentMemeDisplay = ({ top, image, bottom }) => {


  return (
    <div className={styles.CurrentMemeDisplay}>
      <h2>{top}</h2>
      <img src={image} />
      <h2>{bottom}</h2>
    </div>
  );
};

CurrentMemeDisplay.propTypes = {
  top: PropTypes.string,
  image: PropTypes.string,
  bottom: PropTypes.string
};

export default CurrentMemeDisplay;
