// Place to connect all midldleware
import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import reducers from "../store/reducers";
import rootSaga from "../store/sagas";

import { Home } from "../pages";

class App extends Component {
  render() {
    // rootreducer with all states and actions
    const rootReducer = (state, action) => {
      return reducers(state, action);
    };

    const sagaMiddleware = createSagaMiddleware(); // saga middleware
    const midleware = [sagaMiddleware]; // array with all middlewares [a, ..., z]

    // your store with rootReducer (huynya where all reducers combined) and all middlewares
    const store = createStore(rootReducer, applyMiddleware(...midleware));

    // shlyapa from saga api. Makes run saga and make america great again!
    sagaMiddleware.run(rootSaga);

    return (
      // Provider is for connect redux with react
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

export default App;
