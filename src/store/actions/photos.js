import axios from '../../axios';
import { FETCH_PHOTOS_START, FETCH_PHOTOS_SUCCESS } from './types';

function fetchPhotosStart() {
  return {
    type: FETCH_PHOTOS_START,
  };
}

function fetchPhotosSuccess(photos) {
  return {
    type: FETCH_PHOTOS_SUCCESS,
    photos,
  };
}

export function fetchPhotos() {
  return async (dispatch) => {
    dispatch(fetchPhotosStart());
    try {
      const response = await axios.get('/photos?userId=1');
      dispatch(fetchPhotosSuccess(response.data));
    } catch (e) {
      console.error(e);
    }
  };
}
