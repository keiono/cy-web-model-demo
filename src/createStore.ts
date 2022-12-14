import { Store } from './store/Store'

export const createStore = <T extends unknown>(initialState: T): Store<T> => {
  let state = initialState

  const callbacks = new Set<() => void>()
  const getState = () => state
  
  const setState = (nextState: T | ((last: T) => T)) => {
    state =
      typeof nextState === 'function'
        ? (nextState as (last: T) => T)(state)
        : nextState
    callbacks.forEach((callback) => callback())
  }

  const subscribe = (callback: () => void) => {
    callbacks.add(callback)
    
    return () => {
      callbacks.delete(callback)
    }
  }

  return { getState, setState, subscribe }
}
