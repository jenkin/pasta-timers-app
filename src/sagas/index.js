import { call, put, all, takeEvery } from 'redux-saga/effects'

import { remove } from 'lodash-es'

import {
    GET_PRODUCERS_REQ,
    //GET_PRODUCERS_RES_SUCCESS,
    //GET_PRODUCERS_RES_WARNING,
    GET_PRODUCERS_RES_ERROR,
    GET_TIMERS_REQ,
    GET_TIMERS_RES_SUCCESS,
    GET_TIMERS_RES_WARNING,
    GET_TIMERS_RES_ERROR,
    GET_FAVORITES_REQ,
    GET_FAVORITES_SUCCESS,
    //GET_FAVORITES_ERROR,
    ADD_FAVORITE,
    REMOVE_FAVORITE,
} from '../config/constants'

import Api from '../config/api'

function* fetchProducers(action) {
    try {
        const response = yield call(Api, action.payload)
        yield all(response.data.map(producer => put({ type: GET_TIMERS_REQ, payload: { url: producer.timers } })))
    } catch (e) {
        yield put({ type: GET_PRODUCERS_RES_ERROR, message: e.message })
    }
}

export function* producersFetchSaga() {
    yield takeEvery(GET_PRODUCERS_REQ, fetchProducers)
}

function* fetchTimers(action) {
    try {
        const response = yield call(Api, action.payload)
        if (response.data) {
            localStorage.setItem('timers', JSON.stringify(response.data))
        }
        yield put({ type: GET_TIMERS_RES_SUCCESS, payload: response.data })
    } catch (e) {
        const responseData = localStorage.getItem('timers')
        if (responseData) {
            yield put({ type: GET_TIMERS_RES_SUCCESS, payload: JSON.parse(responseData) })
            yield put({ type: GET_TIMERS_RES_WARNING, payload: e.message })
        } else {
            yield put({ type: GET_TIMERS_RES_ERROR, message: e.message })
        }
    }
}

export function* timersFetchSaga() {
    yield takeEvery(GET_TIMERS_REQ, fetchTimers)
}

function* fetchFavorites(action) {
    const responseData = localStorage.getItem('favorites')
    if (responseData) {
        yield put({ type: GET_FAVORITES_SUCCESS, payload: JSON.parse(responseData) })
    }
}

export function* favoritesFetchSaga() {
    yield takeEvery(GET_FAVORITES_REQ, fetchFavorites)
}

function* updateFavorites(action) {
    const favorites = JSON.parse(localStorage.getItem('favorites') || "[]")
    if (action.payload) {
        switch(action.type) {
            case ADD_FAVORITE:
                favorites.push(action.payload)
                break
            case REMOVE_FAVORITE:
                remove(favorites, el => el === action.payload)
                break
            default:
        }
    }
    localStorage.setItem('favorites', JSON.stringify(favorites))
    yield put({ type: GET_FAVORITES_SUCCESS, payload: favorites })
}

export function* favoritesUpdateSaga() {
    yield takeEvery([ADD_FAVORITE, REMOVE_FAVORITE], updateFavorites)
}
