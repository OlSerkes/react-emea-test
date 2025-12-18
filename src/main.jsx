import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App/App';
import './styles/global.sass';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
