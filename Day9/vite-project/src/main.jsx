import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import Marks from './Marks';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App n1="Divyanshu Pandey" n2="divyanshu.2b0231015@abes.ac.in" n3="ABES Engineering College" />
    <App n1="Riddhi" n2="riddhi.2b0231016@abes.ac.in" n3="ABES Engineering College" />
    <Marks m1="7.7" m2="8.91" m3="9.02" />
    <Marks m1="8.34" m2="8.56" m3="9.02" />
  </StrictMode>
);
