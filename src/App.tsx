import { Suspense } from 'react'
import { NetworkRenderer } from './components/NetworkRenderer'

import { SWRConfig } from 'swr'
import { Loading } from './components/Loading'
import { SummaryRenderer } from './components/SummaryRenderer'

import { NetworkPanel } from './components/NetworkPanel'
import { StoreProvider } from './StoreProvider'

const App = () => (
  <>
    <StoreProvider initialState={{ count: 10 }}>
      <h1>Using store provider</h1>
      <NetworkPanel />
      <StoreProvider initialState={{ count: 20 }}>
        <h1>Using inner store provider</h1>
        <NetworkPanel />
      </StoreProvider>
    </StoreProvider>
  
    <h1>Fake Network Viewer with new model</h1>
    <SWRConfig
      value={{
        suspense: true,
        fetcher: (url, init) =>
          fetch(url, init).then((res) => {
            const cxJson = res.json()
            return cxJson
          }),
      }}
    >
      <Suspense
        fallback={<Loading message={'Loading network data from NDEx'} />}
      >
        <NetworkRenderer />
      </Suspense>
      <Suspense fallback={<Loading message={'Loading summary'} />}>
        <SummaryRenderer />
      </Suspense>
    </SWRConfig>
  </>
)

export default App
