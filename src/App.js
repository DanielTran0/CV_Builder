import React from 'react';
import './App.css';
import General from './components/General';
import Work from './components/Work';
import Education from './components/Education';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className="mainHeader">CV Builder</h1>
        <div className="cv">
          <General />
          <Work />
          <Education />
        </div>
      </div>
    );
  }
}

export default App;
