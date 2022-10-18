import { createContext, Context } from 'react'
import { createStore } from '../createStore'
import { State } from '../states/State'
import { Store } from '../store/Store'

const DEFAULT_STATE: State = {
  count: 0,
  text: 'hello',
}

/**
 * Simple context instance
 */
export const StoreContext: Context<Store<State>> = 
  createContext<Store<State>>(
    createStore<State>(DEFAULT_STATE),
  )
