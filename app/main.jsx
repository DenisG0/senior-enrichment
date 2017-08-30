'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import Index from './components/Index'
import store from './store'
//import Root from './components/Root'

render (
  <Provider store={store}>
  <Index />
  </Provider>,
  document.getElementById('main')
)
