import { useContext } from 'react'
import { Store } from '../store/Store'
import { State } from '../states/State'
import { StoreContext } from '../contexts/StoreContext'

export const useSetState = () => {
  const store: Store<State> = useContext(StoreContext)
  return store.setState
}