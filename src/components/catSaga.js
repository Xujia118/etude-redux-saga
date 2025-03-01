import { call, put, takeEvery } from "redux-saga/effects";
import { getCatsSuccess } from "./catSlice";

const getCats = async () => {
  return fetch("https://api.thecatapi.com/v1/breeds").then((response) =>
    response.json()
  );
}

function* workGetCatsFetch() {
  const cats = yield call(getCats);
  const topTen = cats.slice(0, 10);
  yield put(getCatsSuccess(topTen));
}

function* catSaga() {
  yield takeEvery("cats/getCatsFetch", workGetCatsFetch);
}

export default catSaga;
