import { useContext } from 'react'
import { Store } from '../store/Store'
import { NetworkStoreContext } from '../contexts/NetworkStoreContext'
import { NetworkState } from '../states/NetworkState'

export const useSetNetworkState = () => {
  const store: Store<NetworkState> = useContext(NetworkStoreContext)
  return store.setState
}