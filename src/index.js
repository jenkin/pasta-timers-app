import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { BrowserRouter } from 'react-router-dom'

import { store, history } from './config/store'

import './i18n'

import { CssBaseline } from '@material-ui/core'

import './index.css'

import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <BrowserRouter>
                <CssBaseline />
                <App />
            </BrowserRouter>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
