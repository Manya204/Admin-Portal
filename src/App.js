import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ApplicationTable from './components/ApplicationTable';

function App() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div
        className="flex-grow-1 d-flex flex-column"
        style={{ backgroundColor: '#f5f6fa', height: '100vh', overflow: 'hidden' }}
      >
        <Header />
        <div style={{ flexGrow: 1, overflowY: 'auto', padding: '1.5rem' }}>
          <ApplicationTable />
        </div>
      </div>

    </div>
  );
}

export default App;
