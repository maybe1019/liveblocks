import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './assets/styles/styles.scss'
import { RoomProvider } from './liveblocks.config';
import { ClientSideSuspense } from '@liveblocks/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RoomProvider id='my-rool-id'>
      <ClientSideSuspense fallback={<div>Loading...</div>}>
        {() => <App />}
      </ClientSideSuspense>
    </RoomProvider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
