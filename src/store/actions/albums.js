import axios from '../../axios';
import { FETCH_ALBUMS_START, FETCH_ALBUMS_SUCCESS } from './types';

function fetchAlbumsStart() {
  return {
    type: FETCH_ALBUMS_START,
  };
}

function fetchAlbumsSuccess(albums) {
  return {
    type: FETCH_ALBUMS_SUCCESS,
    albums,
  };
}

export function fetchAlbums() {
  return async (dispatch) => {
    dispatch(fetchAlbumsStart());
    try {
      const response = await axios.get('/albums?userId=1');
      dispatch(fetchAlbumsSuccess(response.data));
    } catch (e) {
      console.error(e);
    }
  };
}
