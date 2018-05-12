import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";

import PostForm from "./components/PostForm";

import "./css/normalize.css";
import "./css/skeleton.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <PostForm />
        </div>
      </Provider>
    );
  }
}

export default App;
