import { createSelector } from 'reselect'

import { uniq, map } from 'lodash-es'

import { timersSelector } from './timers'

export const producersSelector = createSelector(
    timersSelector,
    timers => uniq(map(timers, timer => timer.producer))
)
