import React from 'react';
import LocationPanel from './components/location';
import Timeline from './components/time';
import Content from './layout/content';
import Navbar from './layout/navbar';
import './style/global.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="text-right p-4">
        <button className="btn shadow-sm btn-control-global">
          SCHEDULE
        </button>
        <button className="btn shadow-sm btn-control-global">
          SELL GOODS
        </button>
      </div>
      <div className="p-4">
        <div className="row">
          <div className="col-md-2">
            <LocationPanel />
          </div>
          <div className="col-md-10">
            <Timeline />
          </div>
        </div>
        <Content />
      </div>
    </div>
  );
}

export default App;
