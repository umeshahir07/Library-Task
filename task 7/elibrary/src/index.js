import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <Auth0Provider
    domain="{dev-uf1q7rfklnoz7kkq.us.auth0.com}"
    clientId="{bOkvaItioYpQLuF401XF6bfrKQNVIZi9p3z4d_KjMvUu4IYnVMPi2R_f22ANr4GS}"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);
