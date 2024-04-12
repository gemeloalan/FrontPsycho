import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import 'animate.css';
import { App } from './App'
import { store } from './store/store'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </Provider>
    </React.StrictMode>,
)
