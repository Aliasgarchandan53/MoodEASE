import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux'
import { store } from "./app/Store.js";


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <Auth0Provider
    domain="dev-m0k0bn1t86fx677o.us.auth0.com"
    clientId="E998OqeOodqFcmsy3lhiO56OTJ2jf5TD"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
  </Provider>,
)
