import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import { images } from "./images";
import storage from "redux-persist/es/storage";
import NAILS from "../shared/Nails";

const config = {
  key: "root",
  storage,
  debug: true,
};

export const ConfigureStore = () => {
  const store = createStore(images, NAILS, applyMiddleware(thunk, logger));

  const persistor = persistStore(store);
  return { persistor, store };
};
