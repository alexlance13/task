import { combineReducers } from 'redux';
import albumsReducer from './albums';
import photosReducer from './photos';

export default combineReducers({
  photos: photosReducer,
  albums: albumsReducer,
});
