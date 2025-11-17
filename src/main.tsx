/* STYLES */
import './main.css';

/* DEPENDENCIES */
import { StrictMode } from 'react';
import { createRoot, type Root } from 'react-dom/client';

/* COMPONENTS */
import { App } from './components/App/App';

// Creacion de la raiz y renderizado
const root: Root = createRoot(document.querySelector('#root')!);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);