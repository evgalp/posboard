import React, { Component } from 'react';
import PostForm from './components/PostForm';

import './css/normalize.css';
import './css/skeleton.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PostForm/>
      </div>
    );
  }
}

export default App;
