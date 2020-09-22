import React from 'react';
import LocationPanel from './components/location';
import TimePanel from './components/time';
import Content from './layout/content';
import Employee from './layout/employee';
import Navbar from './layout/navbar';
import './style/global.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="text-right p-4">
        <button className="btn btn-light shadow-sm mr-3">
          SCHEDULE
        </button>
        <button className="btn btn-light shadow-sm">
          SELL GOODS
        </button>
      </div>
      <div className="p-4">
        <div className="row">
          <div className="col-md-2">
            <LocationPanel/>
          </div>
          <div className="col-md-10">
            <TimePanel/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2">
            <Employee/>
          </div>
          <div className="col-md-8">
            <Content/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
