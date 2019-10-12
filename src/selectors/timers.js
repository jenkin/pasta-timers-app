import { createSelector } from 'reselect'

import { map, assign } from 'lodash-es'

export const timersAsObjectSelector = state => state.timers || {}

export const timersSelector = createSelector(
    timersAsObjectSelector,
    timersObject => map(timersObject, (timer, id) => assign(timer, { id: id }))
)
