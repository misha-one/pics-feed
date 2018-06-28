import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import { T } from "../../actions/types";

function* getUsers() {
  try {
    const url = "https://jsonplaceholder.typicode.com/users";

    const response = yield call(axios.get, url);

    yield put({ type: T.GET_USERS_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: T.GET_USERS_ERROR, payload: error });
  }
}

export default function* watchGetUsers() {
  yield takeLatest(T.GET_USERS, getUsers);
}
