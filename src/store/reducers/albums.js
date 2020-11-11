import { FETCH_ALBUMS_START, FETCH_ALBUMS_SUCCESS } from '../actions/types';

const initialState = {
  albums: [],
  loading: false,
};

export default function albumsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALBUMS_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ALBUMS_SUCCESS:
      return {
        ...state,
        loading: false,
        albums: action.albums,
      };
    default:
      return state;
  }
}
