import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Navbar';
import Ban from './ban'

import CardContent from './content/cardcontent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Navbar/>
    <Ban/>
    <CardContent/>
  </>
);


