import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { AppConfigContext, defaultAppConfig } from './AppConfigContext'

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
  <StrictMode>
    <AppConfigContext.Provider value={defaultAppConfig}>
      <App />
    </AppConfigContext.Provider>
  </StrictMode>,
)
