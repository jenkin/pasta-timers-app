import { GET_FAVORITES_SUCCESS } from '../config/constants'

export default function favoritesReducer(state = [], action) {
    switch (action.type) {
        case GET_FAVORITES_SUCCESS:
            return action.payload || state
        default:
            return state
    }
}
