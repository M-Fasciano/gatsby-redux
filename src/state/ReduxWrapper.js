import React from 'react'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import { createStore as reduxCreateStore } from 'redux'
import rootReducer from '../reducers'

const createStore = () => reduxCreateStore(rootReducer, composeWithDevTools())

export default ({ element }) => (
  <Provider store={createStore()}>{element}</Provider>
)
