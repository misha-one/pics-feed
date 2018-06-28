import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import reducers from "../store/reducers";

import Home from "./Home";

class App extends Component {
  render() {
    const rootReducer = (state, action) => {
      return reducers(state, action);
    };

    const midleware = [];

    const store = createStore(rootReducer, applyMiddleware(...midleware));

    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

export default App;
