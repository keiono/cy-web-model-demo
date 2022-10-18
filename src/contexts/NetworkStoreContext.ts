import { createContext } from 'react'
import { createStore } from '../createStore'
import { NetworkState } from '../states/NetworkState'
import { Store } from '../store/Store'

const DEFAULT_STATE: NetworkState = {
  network: {},
  name: 'test network'
}

export const NetworkStoreContext = createContext<Store<NetworkState>>(
  createStore<NetworkState>(DEFAULT_STATE),
)