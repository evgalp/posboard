import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";

import Postboard from "./components/Postboard";

import "./css/normalize.css";
import "./css/skeleton.css";
import "./css/style.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="container">
            <div className="row">
              <div className="twelve columns">
                <h1>Posts app</h1>
              </div>
            </div>
          </div>
          <Postboard />
        </div>
      </Provider>
    );
  }
}

export default App;
