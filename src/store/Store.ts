/**
 *
 * Generic data store for the app.
 * Use subscription to lisning to the change
 *
 */
export interface Store<T> {
  getState: () => T
  setState: (action: T | ((prev: T) => T)) => void
  subscribe: (callback: () => void) => () => void
}
