'use strict'
import { combineReducers } from 'redux'
import { Record } from 'immutable'
import { USER_LOGIN } from '../lib/constants'


const Profile = Record({
  lastLoggedIn: null
})

// export const profileInitialState = Record({
//   form: new Profile
// });

function profileReducer(state = new Profile, action) {
  switch (action.type) {
    case USER_LOGIN:
      return state.set('lastLoggedIn', 'now')
    default:
      return state
  }
}

const rootReducer =combineReducers({
  profileReducer
})

export default rootReducer