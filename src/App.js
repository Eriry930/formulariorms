import React from 'react';
import { CrudProvider } from './components/context/CrudContext.jsx';
import CrudApp from './components/CrudApp.jsx'
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <CrudProvider>
        <CrudApp />
      </CrudProvider>
    </div>
  );
}

export default App;
