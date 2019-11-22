import { postMeme, getMemes } from '../services/memes';
export const CREATE_MEME = 'CREATE_MEME';

export const createMeme = (top, image, bottom) => dispatch => {
  postMeme(top, bottom, image)
    .then(meme => {
      dispatch({
        type: CREATE_MEME,
        payload: meme
      });
    });
};

export const SET_MEMES = 'SET_MEMES';

export const setMemes = () => dispatch => {
  getMemes()
    .then(memes => {
      console.log(memes);
      dispatch({
        type: SET_MEMES,
        payload: memes
      });
    });
}
;