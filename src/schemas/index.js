import md5 from 'md5'

import { schema } from 'normalizr'

export const timerSchema = new schema.Entity('timers', {}, { idAttribute: (v,p,k) => md5(`${v.producer}-${v.line}-${v.name}`) })
