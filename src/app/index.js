import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Popular from './components/Popular';
import Battle from './components/Battle';

// * render() controls UI
  // HTML code within is typical jsx code

export default class App extends React.Component {
  render() {
    return (
    <div className="container">
      <Battle />
    </div>
    )
  }
}

ReactDOM.render(
  <App />, // React element
  document.getElementById('app') // Where to render the Element to
)
