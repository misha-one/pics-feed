import { combineReducers } from "redux";

import photos from "./photos/photos";
import users from "./users/users";

export default combineReducers({
  photos: photos,
  users: users
});
