import {
    GET_PRODUCERS_REQ,
    GET_FAVORITES_REQ,
    ADD_FAVORITE,
    REMOVE_FAVORITE,
} from '../config/constants'

export function getTimers() {
    return { type: GET_PRODUCERS_REQ, payload: { url: "producers.json" } }
}

export function getFavorites() {
    return { type: GET_FAVORITES_REQ }
}

export function addFavorite(id) {
    return { type: ADD_FAVORITE, payload: id }
}

export function removeFavorite(id) {
    return { type: REMOVE_FAVORITE, payload: id }
}
