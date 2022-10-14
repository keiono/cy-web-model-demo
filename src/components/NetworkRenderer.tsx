import ErrorBoundary from '../ErrorBoundary'
import { useNetwork } from '../hooks/useNetwork'

// const UUID_1: string = '7fc70ab6-9fb1-11ea-aaef-0ac135e8bacf'
const LARGE_UUID = 'e96d063d-237a-11ea-bb65-0ac135e8bacf'

export const NetworkRenderer = () => {
  const result = useNetwork(LARGE_UUID)

  return (
    <ErrorBoundary>
      <h1>- Network Renderer -</h1>
      <div>
        <p>Node Count: {Object.keys(result.network.nodes).length}</p>
        <p>Edge Count: {Object.keys(result.network.edges).length}</p>
      </div>
    </ErrorBoundary>
  )
}
