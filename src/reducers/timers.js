import { normalize } from 'normalizr'

import { GET_TIMERS_RES_SUCCESS } from '../config/constants'

import { timerSchema } from '../schemas'

export default function timersReducer(state = [], action) {
    switch (action.type) {
        case GET_TIMERS_RES_SUCCESS:
            return action.payload ? normalize(action.payload, [timerSchema]).entities.timers : state
        default:
            return state
    }
}
