import { createSelector } from 'reselect'

import { map, assign, sortBy } from 'lodash-es'

export const timersAsObjectSelector = state => state.timers || {}

export const timersSelector = createSelector(
    timersAsObjectSelector,
    timersObject => sortBy(map(timersObject, (timer, id) => assign(timer, { id: id })), timer => timer.name)
)
