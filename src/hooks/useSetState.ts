import { StoreContext } from '../StoreContext'
import { useContext } from 'react'
import { Store } from '../store/Store'
import { State } from '../State'

export const useSetState = () => {
  const store: Store<State> = useContext(StoreContext)
  return store.setState
}
