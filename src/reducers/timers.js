import { normalize } from 'normalizr'
import { assign } from 'lodash-es'

import { GET_TIMERS_RES_SUCCESS } from '../config/constants'

import { timerSchema } from '../schemas'

export default function timersReducer(state = {}, action) {
    switch (action.type) {
        case GET_TIMERS_RES_SUCCESS:
            return action.payload ? assign({}, state, normalize(action.payload, [timerSchema]).entities.timers) : state
        default:
            return state
    }
}
