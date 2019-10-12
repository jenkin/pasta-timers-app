import {
    GET_TIMERS_RES_WARNING,
    GET_TIMERS_RES_ERROR,
    RESET_ERRORS
} from '../config/constants'

export default function errorsReducer(state = {}, action) {
    switch (action.type) {
        case GET_TIMERS_RES_WARNING:
            return action.payload ? { "type": "warning", "message": action.payload } : state
        case GET_TIMERS_RES_ERROR:
            return action.payload ? { "type": "error", "message": action.payload } : state
        case RESET_ERRORS:
            return {}
        default:
            return state
    }
}
