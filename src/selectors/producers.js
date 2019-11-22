import { createSelector } from 'reselect'

import { uniq, map, sortBy } from 'lodash-es'

import { timersSelector } from './timers'

export const producersSelector = createSelector(
    timersSelector,
    timers => sortBy(uniq(map(timers, timer => timer.producer)))
)
