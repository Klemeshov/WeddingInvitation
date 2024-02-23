import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

const node = document.getElementById('root');
if (!node) throw new Error('cant find root');

const root = createRoot(node);
root.render(<App />);