/**
 * output default new terminal data obj
 */

import { nanoid as generate } from 'nanoid/non-secure'

const { prefix } = window
const e = prefix('control')

export default () => ({
  id: generate(),
  status: 'processing',
  title: e('newTerminal')
})
