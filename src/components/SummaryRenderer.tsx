import ErrorBoundary from '../ErrorBoundary'
import { useNetworkSummary } from '../hooks/useNetworkSummary'

const LARGE_UUID = 'e96d063d-237a-11ea-bb65-0ac135e8bacf'

export const SummaryRenderer = () => {
  const result = useNetworkSummary(LARGE_UUID)
  const { summary } = result

  return (
    <ErrorBoundary>
      <h1>Network Summary Renderer</h1>
      <div>
        {JSON.stringify(summary)}
      </div>
    </ErrorBoundary>
  )
}