import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Article from './containers/Article/Article';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Article />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
