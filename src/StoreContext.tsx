import { createContext } from 'react'
import { createStore } from './createStore'
import { State } from './State'
import { Store } from './store/Store'

const DEFAULT_STATE: State = {
  count: 0,
  text: 'hello',
}

export const StoreContext = createContext<Store<State>>(
  createStore<State>(DEFAULT_STATE),
)
