import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

const rootContainer = document.createElement('div');
document.body.appendChild(rootContainer);
const root = createRoot(rootContainer);

root.render(<App />);
