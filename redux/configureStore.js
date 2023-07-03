import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import { imagesReducer } from './images';
import storage from 'redux-persist/es/storage';
// import NAILS from '../shared/Nails';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({ images: imagesReducer });

const config = {
  key: 'root',
  storage,
  debug: true,
};

const persistedReducer = persistReducer(config, rootReducer);


export const ConfigureStore = () => {
  // const store = createStore(images, NAILS, applyMiddleware(thunk, logger));
  const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk, logger],
  });
  const persistor = persistStore(store);
  return { persistor, store };
};
