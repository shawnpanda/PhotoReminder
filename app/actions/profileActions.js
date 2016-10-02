'use strict'
import { Actions } from 'react-native-router-flux'

import { USER_LOGIN } from '../lib/constants'

export function userLogIn() {
  return {
    type: USER_LOGIN
  }
}