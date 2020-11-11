import { FETCH_PHOTOS_START, FETCH_PHOTOS_SUCCESS } from '../actions/types';

const initialState = {
  photos: [],
  loading: false,
};

export default function photosReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PHOTOS_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PHOTOS_SUCCESS:
      return {
        ...state,
        loading: false,
        photos: action.photos,
      };
    default:
      return state;
  }
}
