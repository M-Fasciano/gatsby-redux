import React from 'react'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { loadState, saveState } from '../reducers/localStorage'
import rootReducer from '../reducers'
import throttle from 'lodash.throttle'

const persistedState = loadState()
const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools()
)

store.subscribe(throttle(() => {
  saveState({
    counter: store.getState().counter
  })
}, 1000))

export default ({ element }) => (
  <Provider store={store}>{element}</Provider>
)
