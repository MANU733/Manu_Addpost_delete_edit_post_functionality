import React from 'react';
import '../src/App.css';
import TabPanel from '../src/customComponent/tabs/index.js';
import { Route ,Switch, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <TabPanel/>
    </BrowserRouter>
   </>
  );
}

export default App;
