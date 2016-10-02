import { combineReducers } from 'redux'

function profileReducer(state = [], action) {
  switch (action.type) {
    default:
      return state
  }
}

const rootReducer =combineReducers({
  profileReducer
})

export default rootReducer