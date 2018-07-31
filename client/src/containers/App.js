import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Front from './Front';
import Inline from './Inline';

class App extends Component {
  render() {
    return (
      <BrowserRouter className="app">
        <div>
          <Route exact path="/" component={Front} />
          <Route path="/inline" component={Inline} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
