import { FETCH_ALBUMS_START, FETCH_ALBUMS_SUCCESS, SET_SINGLE_ALBUM_PHOTOS } from '../actions/types';

const initialState = {
  albums: [],
  singleAlbumPhotos: [],
  loading: false,
};

export default function albumsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALBUMS_START:
      return {
        ...state,
        loading: true,
      };
    case SET_SINGLE_ALBUM_PHOTOS:
      return {
        ...state,
        singleAlbumPhotos: action.photos,
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
