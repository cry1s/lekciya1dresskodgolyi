import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      title: '',
      timestamp: ''
    };
  }

  componentDidMount() {
    this.getMessage();
  }

  getMessage() {
    fetch('/')
      .then(response => this.setState({ message: response.message, title: response.title, timestamp: response.timestamp }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.message}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
