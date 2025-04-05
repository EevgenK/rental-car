import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import 'modern-normalize';
import './index.css';
import App from './App.jsx';
import { persistor, store } from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
          <Toaster
            containerStyle={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
              zIndex: 2,
            }}
            reverseOrder={false}
            toastOptions={{
              duration: 5000,
              style: {
                minWidth: '290px',
                padding: '10px',
                border: '3px solid var(--white)',
                background: 'var(--button)',
                color: 'var(--white)',
                fontSize: '18px',
              },
            }}
          />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>,
);
