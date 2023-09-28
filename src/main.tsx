import React from 'react'
import ReactDOM from 'react-dom/client'

import '@radix-ui/themes/styles.css';

import { App } from './App';

import { Theme } from '@radix-ui/themes';

import './global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Theme
      appearance="dark"
      accentColor="ruby"
      radius="large"
      scaling="100%"
      panelBackground="translucent"
    >
      <App />
    </Theme>
  </React.StrictMode>,
)
