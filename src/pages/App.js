import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import reducers from "../store/reducers";
import rootSaga from "../store/sagas";

import Home from "./Home";

class App extends Component {
  render() {
    const rootReducer = (state, action) => {
      return reducers(state, action);
    };

    const sagaMiddleware = createSagaMiddleware();
    const midleware = [sagaMiddleware];

    const store = createStore(rootReducer, applyMiddleware(...midleware));

    sagaMiddleware.run(rootSaga);

    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

export default App;
