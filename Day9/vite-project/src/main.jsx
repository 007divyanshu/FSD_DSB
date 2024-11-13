/* eslint-disable no-unused-vars */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import Marks from './Marks';
import DisplayMarks from './DisplayMarks';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DisplayMarks/>
  </StrictMode>
);
