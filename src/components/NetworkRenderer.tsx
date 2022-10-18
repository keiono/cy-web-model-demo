import { NetworkStoreContext } from '../contexts/NetworkStoreContext'
import ErrorBoundary from '../ErrorBoundary'
import { useNetwork } from '../hooks/useNetwork'
import { useSelector } from '../hooks/useSelector'
import { useSetNetworkState } from '../hooks/useSetNetworkState'
import { NetworkState } from '../states/NetworkState'

// const UUID_1: string = '7fc70ab6-9fb1-11ea-aaef-0ac135e8bacf'
const LARGE_UUID = 'e96d063d-237a-11ea-bb65-0ac135e8bacf'

const selectNetwork = (state: NetworkState): string => state.name ?? ''

export const NetworkRenderer = () => {
  
  const result = useNetwork(LARGE_UUID)
  const { network } = result
  
  const setState = useSetNetworkState()

  const name: string = useSelector<string, NetworkState>(
    selectNetwork,
    NetworkStoreContext,
  )


  const updateNetwork = () => {
    setState((state) => ({
      ...state,
      name: state.name + ': UPDATED2!!',
    }))
  }

  return (
    <ErrorBoundary>
      <h1>- Network Renderer -</h1>
      <div>
        Update Network: {name} <button onClick={updateNetwork}>UPDATE</button>
      </div>
      <div>
        <p>Node Count: {Object.keys(network.nodes).length}</p>
        <p>Edge Count: {Object.keys(network.edges).length}</p>
      </div>
    </ErrorBoundary>
  )
}
