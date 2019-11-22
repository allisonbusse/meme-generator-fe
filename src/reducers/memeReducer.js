import { SET_MEMES, CREATE_MEME } from '../actions/memeActions';



export default function reducer(state = [], action) {
  switch(action.type) {
    case SET_MEMES:
      return action.payload;
    case CREATE_MEME:
      return [...state, action.payload];
    default:
      return state;
  }
}
