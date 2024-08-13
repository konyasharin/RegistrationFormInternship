import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { theme } from '@/shared/theme/theme.ts';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from '@/context/StoreContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <MantineProvider theme={theme}>
          <App />
        </MantineProvider>
      </StoreProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
