import ErrorBoundary from '../ErrorBoundary'
import { useNetworkSummary } from '../hooks/useNetworkSummary'

const LARGE_UUID = 'e96d063d-237a-11ea-bb65-0ac135e8bacf'

export const SummaryRenderer = () => {
  const result = useNetworkSummary(LARGE_UUID)

  const { summary } = result

  const keys: string[] = Object.keys(summary)

  return (
    <ErrorBoundary>
      <h1>Network Summary Renderer</h1>
      <div>
        {keys.map((key) => (
          <div key={key}>{summary[key].toString()}</div>
        ))}
      </div>
    </ErrorBoundary>
  )
}