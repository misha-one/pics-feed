import { all } from "redux-saga/effects";

import watchGetPhotos from "./photos/getPhotos";
import watchGetUsers from "./users/getUsers";

export default function* rootSaga() {
  yield all([watchGetPhotos(), watchGetUsers()]);
}
