import { ReactNode, useRef } from 'react'
import { createStore } from './createStore'
import { Store } from './store/Store'
import { State } from './states/State'
import { StoreContext } from './contexts/StoreContext'

export const StoreProvider = ({
  initialState,
  children,
}: {
  initialState: State
  children: ReactNode
}) => {
  const storeRef = useRef<Store<State>>()
  if (!storeRef.current) {
    storeRef.current = createStore(initialState)
  }
  return (
    <StoreContext.Provider value={storeRef.current}>
      {children}
    </StoreContext.Provider>
  )
}
