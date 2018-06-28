import { all } from "redux-saga/effects";

import watchGetUsers from "./users/getUsers";

export default function* rootSaga() {
  yield all([watchGetUsers()]);
}
