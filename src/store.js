import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import catReducer from "./components/catSlice";
import catSaga from "./components/catSaga.js";

const sagaMiddleWare = createSagaMiddleware();

const store = configureStore({
  reducer: {
    cats: catReducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(sagaMiddleWare),
});

sagaMiddleWare.run(catSaga);

export default store;
