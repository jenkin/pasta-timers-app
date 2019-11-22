import { createBrowserHistory } from 'history'
import { createStore, compose, applyMiddleware } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'

import {
    producersFetchSaga,
    timersFetchSaga,
    favoritesFetchSaga,
    favoritesUpdateSaga
} from '../sagas'

import createRootReducer from '../reducers'

export const history = createBrowserHistory()
const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
    createRootReducer(history),
    {},
    compose(
        applyMiddleware(
            routerMiddleware(history),
            sagaMiddleware,
        )
    )
)

//store.subscribe(() => console.log("store", store.getState()))

sagaMiddleware.run(producersFetchSaga)
sagaMiddleware.run(timersFetchSaga)
sagaMiddleware.run(favoritesFetchSaga)
sagaMiddleware.run(favoritesUpdateSaga)
