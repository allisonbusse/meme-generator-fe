import { post, get } from './request';
const BASE_URL = 'http://localhost:7890/api/memes';

export const postMeme = (top, bottom, image) => post(`${BASE_URL}`,
  { top, bottom, image });

export const getMemes = () => get(`${BASE_URL}`);
