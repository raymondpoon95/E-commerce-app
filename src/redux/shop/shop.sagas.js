import { takeLatest, call, put, all } from "redux-saga/effects";
import {
  db,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import { fetchCollectionsSuccess, fetchCollectionsFail } from "./shop.actions";
import ShopActionTypes from "./shop.types";

// all generator functions must have a yield in them
export function* fetchCollectionsAsync() {
  try {
    const collectionRef = db.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );

    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFail(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
