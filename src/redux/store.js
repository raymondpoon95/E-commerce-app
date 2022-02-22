import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist"; // allows browser to cache the store depending on configurations set
import logger from "redux-logger";
import rootReducer from "./root-reducer";

// const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware());

const persistor = persistStore(store);

const storeConfig = {
  store,
  persistor,
};

export default storeConfig;
