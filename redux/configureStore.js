import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import { images } from "./images";
import storage from "redux-persist/es/storage";

const config = {
  key: "root",
  storage,
  debug: true,
};

export const ConfigureStore = () => {
  const store = createStore(config, { images }, applyMiddleware(thunk, logger));

  const persistor = persistStore(
    createStore(persistReducer(config, { images }))
  );
  return { persistor, store };
};
