import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import timersReducer from './timers'
import favoritesReducer from './favorites'
import errorsReducer from './errors'

export default (history) => combineReducers({
    timers: timersReducer,
    favorites: favoritesReducer,
    errors: errorsReducer,
    router: connectRouter(history),
})
