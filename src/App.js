import logo from './logo.svg';
import './App.css';
import Items from './Items';
import { Component } from 'react';

class App extends Component {
  constructor() {
      super();
      this.state = {
      count: 0
    };
  }
  
  render() {
  return (
    <div className="App">
        <div className="title">Todo List</div>
        <div className="content">
          <div className="items">
            <Items/>
          </div>
        </div>
    </div>
  );
  }

}

export default App;
