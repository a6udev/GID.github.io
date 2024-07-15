import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18next.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <I18nextProvider i18n={i18n} >
    <Provider store={store}>
      <App />
    </Provider>
  </I18nextProvider>
)
